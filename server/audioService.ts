import * as mm from 'music-metadata';
import {Readable} from 'stream';
import * as JSZip from 'jszip';
import * as path from 'path';


import * as express from 'express';
const app = express();
import * as fileUpload from 'express-fileupload';
import {Request} from 'express';
import {Response} from 'express';
import {UploadedFile} from 'express-fileupload';
import {IFormat} from 'music-metadata';
app.use(fileUpload());

interface AudioData {
[name: string]: {[type: string]: IFormat}
}


export class AudioService {
  static async getFileData(stream: Readable, fileName: string) {
    return await mm.parseStream(stream, fileName, { duration: false, skipCovers: true});
  }
  
  static async getAudioDataFromZip(file: UploadedFile): Promise<AudioData> {
    const result: AudioData = {};
    const zip = new JSZip();
    await zip.loadAsync(file.data);

    for (const fileName in zip.files) {
      const file = zip.files[fileName];
      const name = path.parse(fileName).name;
      const ext = path.parse(fileName).ext.replace('.', '');
      if (ext !== 'wav' && ext !== 'mp3') {
        continue;
      }
      if (!result[name]) {
        result[name] = {};
      }
      const data = await AudioService.getFileData(file.nodeStream() as Readable, fileName);
      result[name][ext] = data.format;
    }
    return result
  }
  
}

app.post('/', async (req: Request, res: Response) => {
  const file = req.files.file as UploadedFile;
  const audioData = await AudioService.getAudioDataFromZip(file);
  console.log(audioData);
  res.send('ok');
});

app.listen(80, () => {console.log('started')});