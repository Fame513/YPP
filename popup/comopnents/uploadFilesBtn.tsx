import * as React from 'react';
import {Button} from 'react-materialize';


export class UploadFilesBtn extends React.Component<{model: Model}> {
  public model: Model;
  private fileInputRef;
  constructor(props) {
    super(props);
    this.model = props.model
  }
  
  render() {
    return (
      <div style={{paddingBottom: '8px'}}>
        <Button onClick={this.openFileSelect.bind(this)} disabled={!this.model.user || !this.model.user.email}>Upload files</Button>
        <input type="file" style={{display: 'none'}} ref={(input) => { this.fileInputRef = input; }} multiple onChange={this.uploadFiles.bind(this)}/>
      </div>
    );
  }
  
  uploadFiles(e) {
    this.model.uploadFiles(e.target.files)
  }
  
  openFileSelect() {
    this.fileInputRef.click();
  }

  sendNotification() {
    chrome.notifications.create('', {message: 'message', type: 'basic', title: 'title', iconUrl: 'https://habrastorage.org/getpro/habr/avatars/4ec/bd0/85d/4ecbd085d692835a931d03174ff19539.png'})
  }
}