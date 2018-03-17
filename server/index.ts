import * as express from 'express';
import * as  mp3Duration from 'mp3-duration';
import * as fileUpload from 'express-fileupload';
import * as Client from 'ftp';
import {UploadedFile} from 'express-fileupload';
import * as JSZip from 'jszip';
import * as path from 'path';
import {EnvatoApi} from './envatoApi';

const app = express();

app.use(fileUpload());

function formatTime(time) {
  time = Math.floor(time);
  return Math.floor(time / 60) + ':' + (time % 60);
}

app.post('/', async (req, res) => {
  const files: UploadedFile[] = getFileArray(req.files);
  const mainFile = getMainFile(files);
  console.log('mainFile', mainFile.name);

  const isLoop = hasLoop(files);
  console.log('isLoop', isLoop);
  const trackName = getTrackName(mainFile.name);
  console.log('trackName', trackName);
  const tempo = getTempo(mainFile.name);
  console.log('tempo', tempo);
  const filesForArchive = getFilesForArcive(files);
  const archive = await createArchive(filesForArchive);
  const imageFile = getImageFile(files);
  console.log('imageFile', imageFile.name);
  const previewFile = getPreviewFile(files);
  console.log('previewFile', previewFile.name);
  
  const durations = await getFilesDuration(getMp3Only(filesForArchive));
  console.log('durations', durations);

  const ftp = await connectFtp(
    'ftp.marketplace.envato.com', 
    'Fame25', 
    'ybcd1n34ipoh4dkera1a1t1563dqhjn9');
  await ftpPutPromise(ftp, archive, trackName + '.zip');
  await ftpPutPromise(ftp, imageFile.data, imageFile.name);
  await ftpPutPromise(ftp, previewFile.data, previewFile.name);
  ftp.end();
  ftp.destroy();

  console.log('SUCCESS');

  res.send({
    files: durations,
    archieName: trackName + '.zip',
    previewName: previewFile.name,
    imageName: imageFile.name,
    tempo: tempo,
    isLoped: isLoop,
    name: trackName
  });

});

app.get('/auth', async (req, res) => {
  
  const result = await EnvatoApi.getTokens(req.query.code);
  const appId = 'lddpoohhbghmmppbfgkgbhcjbahglcbm'
  // const user = await EnvatoApi.getUserInfo(result.access_token);
  // console.log(user);
  console.log('logged');

  res.send(`<script>
window.onload = function () {
  chrome.runtime.sendMessage('${appId}', {method: 'receiveCode', tokens: JSON.parse('${JSON.stringify(result)}')});
 }
 </script>`);
});

app.listen(80);

function ftpPutPromise(ftp: Client, input: NodeJS.ReadableStream | Buffer | string, destPath: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    ftp.put(input, destPath, function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
}

function connectFtp(host: string, user: string, password: string): Promise<Client> {

  return new Promise((resolve, reject) => {
    const ftp = new Client();

    ftp.on('ready', function () {
      resolve(ftp);
    });

    ftp.connect({
      host: host,
      user: user,
      password: password
    });
  });
}

function getFileArray(files?: fileUpload.FileArray): UploadedFile[] {
  const result: UploadedFile[] = [];
  for (const fileKey in files) {
    if (files.hasOwnProperty(fileKey)) {
      result.push(files[fileKey] as UploadedFile);
    }
  }

  return result;
}

function validateFiles(files: UploadedFile[]): boolean {
  return true;
}

function getMp3Only(files: UploadedFile[]): UploadedFile[] {
  return files.filter(file => file.name.endsWith('.mp3'));
}

function getMainFile(files: UploadedFile[]): UploadedFile {
  return files.find(file => /_.+_.*main.*\.mp3/i.test(file.name));
}

function getTrackName(fileName: string): string {
  return /_(.*)_/.exec(fileName)[1];
}

function getLoopFile(files: UploadedFile[]): UploadedFile | undefined {
  return files.find(file => /_.+_.*loop.*\.mp3/i.test(file.name));
}

function hasLoop(files: UploadedFile[]): boolean {
  return Boolean(getLoopFile(files));
}

function getTempo(fileName: string): string {
  return /_.*_.*\((\d+).*bpm\)/i.exec(fileName)[1];
}

function getPreviewFile(files: UploadedFile[]): UploadedFile {
  return files.find(file => /_.+_.*preview.*\.mp3/i.test(file.name));
}

function getFilesForArcive(files: UploadedFile[]): UploadedFile[] {
  return files.filter(file => file.mimetype.startsWith('audio'))
    .filter(file => !/_.+_.*preview.*\.mp3/i.test(file.name));
}

function getImageFile(files: UploadedFile[]): UploadedFile {
  return files.find(file => file.mimetype.startsWith('image'));
}

function createArchive(files: UploadedFile[]): Promise<Buffer> {
  const zip = new JSZip();
  for (const file of files) {
    zip.file(file.name, file.data);
  }
  return zip.generateAsync({type: 'nodebuffer'});
}

function getNameWithoutExt(name: string): string {
  return path.parse(name).name;
}

async function getFilesDuration(files: UploadedFile[]): Promise<{ name: string, duration: string }[]> {
  const result: { name: string, duration: string }[] = [];
  const mainFile = getMainFile(files);
  const loopFile = getLoopFile(files);
  const otherFiles = files.filter(file => file !== mainFile && file !== loopFile);

  const otherFileResult: { name: string, duration: string }[] = [];

  for (const file of otherFiles) {
    otherFileResult.push({
      name: getNameWithoutExt(file.name),
      duration: await mp3Duration(file.data)
    });
  }

  otherFileResult.sort((a, b) => +a.duration - +b.duration);

  result.push({
    name: getNameWithoutExt(mainFile.name),
    duration: formatTime(await mp3Duration(mainFile.data))
  });

  for (const file of otherFileResult) {
    result.push({
      name: file.name,
      duration: formatTime(file.duration)
    });
  }
  
  if (loopFile) {
    result.push({
      name: getNameWithoutExt(loopFile.name),
      duration: formatTime(await mp3Duration(loopFile.data))
    });
  }

  return result;

} 