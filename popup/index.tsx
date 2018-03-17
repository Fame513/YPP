import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, Icon, Input, Row, ProgressBar, Preloader} from 'react-materialize';
import {SendBtn} from './comopnents/sendBtn';
import {ChangeEvent} from 'react';

class AuthBtn extends React.Component<{ model: Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    return (
      <Button onClick={this.login.bind(this)}>Auth</Button>
    );
  }

  login() {
    this.model.openAuthWindow();
  }
}

class FileInput extends React.Component<{ model: Model }> {

  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    return (
      <input type="file" multiple onChange={this.uploadFiles.bind(this)}></input>
    );
  }

  uploadFiles(e) {
    this.model.uploadFiles(e.target.files);
  }
}

class LogoutBtn extends React.Component<{ model: Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    return (
      <button>Logout</button>
    );
  }
}

class PasteBtn extends React.Component<{ model: Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    return (
      <button onClick={this.pasteCode.bind(this)}>Paste</button>
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

  render() {
    return (
      <button id="open-btn">Open new window</button>
    );
  }
}

class Progress extends React.Component<{ model: Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    if (this.model.isLoading) {
      if (this.model.progress === 100) {
        return (
          <Row>
            <Preloader size='small'/>
          </Row>
        );
      } else {
        return (
          <Row>
            <ProgressBar progress={this.model.progress}/>
          </Row>
        );
      }
    } else {
      return ''
    }
  }
}

class TemplateList extends React.Component<{ model: Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  handleInputChange(e) {
    this.model.selectedTemplate = +e.target.value;
    this.model.onChange();
  }

  render() {
    const list = this.model.templates.map((temp, i) => <option value={i}>{temp.name}</option>);
    return (
      <div>
        <Row>
          <Input type='select' label="Templte" defaultValue={this.model.selectedTemplate}
                 onChange={this.handleInputChange.bind(this)} >
            {list}
          </Input>
        </Row>
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
        <div>{this.model.user.name}</div>
        <div>{this.model.lastLoadedFiles ? this.model.lastLoadedFiles.name : ''}</div>
        <Progress model={this.model}/>
        <TemplateList model={this.model}></TemplateList>
        <FileInput model={this.model}></FileInput>
        <SendBtn model={this.model}></SendBtn>
        <AuthBtn model={this.model}></AuthBtn>
        <LogoutBtn model={this.model}></LogoutBtn>
        <PasteBtn model={this.model}></PasteBtn>
        <NewWindowBtn model={this.model}></NewWindowBtn>
      </div>
    );
  }
}


chrome.runtime.getBackgroundPage((app: any) => {
  const model: Model = app.getModel();
  console.log(app.getModel());
  ReactDOM.render(
    <Content model={model}></Content>,
    document.getElementById('content')
  );
  console.log(app);
  model.onChange = () => {
    console.log(app.getModel());
    ReactDOM.render(
      <Content model={model}></Content>,
      document.getElementById('content')
    );
  };
});
