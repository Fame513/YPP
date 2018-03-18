import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, Icon, Input, Row, ProgressBar, Preloader} from 'react-materialize';
import {UploadFilesBtn} from './comopnents/uploadFilesBtn';
import {UserArea} from './comopnents/userArea';
import {TemplateList} from './comopnents/templateList';
import {Progress} from './comopnents/progress';

class PasteBtn extends React.Component<{ model: Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    return (
      <div style={{padding: '8px 0'}}>
        <Button onClick={this.pasteCode.bind(this)} disabled={!this.model.lastLoadedFiles}>Paste</Button>
      </div>
    );
  }

  pasteCode() {
   this.model.pasteData();
  }
}

class NewWindowBtn extends React.Component<{ model: Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }
  
  openNewTab() {
    chrome.tabs.create({ url: 'https://audiojungle.net/content/upload/form?utf8=%E2%9C%93&type=music'});
  }

  render() {
    return (
      <div style={{padding: '8px 0'}}>
        <Button id="open-btn" onClick={this.openNewTab}>Open new window</Button>
      </div>
    );
  }
}

class Content extends React.Component<{ model: Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    return (
      <div>
        <UserArea model={this.model}/>
        <div>{this.model.lastLoadedFiles ? this.model.lastLoadedFiles.name : ''}</div>
        <Progress model={this.model}/>
        <TemplateList model={this.model}/>
        <UploadFilesBtn model={this.model}/>
        <PasteBtn model={this.model}/>
        <NewWindowBtn model={this.model}/>
      </div>
    );
  }
}


chrome.runtime.getBackgroundPage((app: any) => {
  const model: Model = app.getModel();
  (model.onChange = () => {
    console.log(app.getModel());
    ReactDOM.render(
      <Content model={model}/>,
      document.getElementById('content')
    );
  })();
});
