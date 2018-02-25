import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize'
import {SendBtn} from './comopnents/sendBtn';

class AuthBtn extends React.Component<{model: Model}> {
  public model: Model;
  constructor(props) {
    super(props);
    this.model = props.model
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

class FileInput extends React.Component<{model: Model}> {

  public model: Model;
  constructor(props) {
    super(props);
    this.model = props.model
  }
  
  render() {
    return (
      <input type="file" multiple></input>
    );
  }
}

class LogoutBtn extends React.Component<{model: Model}> {
  public model: Model;
  constructor(props) {
    super(props);
    this.model = props.model
  }

  render() {
    return (
      <button>Logout</button>
    );
  }
}

class PasteBtn extends React.Component<{model: Model}> {
  public model: Model;
  constructor(props) {
    super(props);
    this.model = props.model
  }

  render() {
    return (
      <button onClick={this.pasteCode}>Paste</button>
    );
  }

  pasteCode() {
    console.log('past');
  }
}

class NewWindowBtn extends React.Component<{model: Model}> {
  public model: Model;
  constructor(props) {
    super(props);
    this.model = props.model
  }

  render() {
    return (
      <button id="open-btn">Open new window</button>
    );
  }
}

class TemplateList extends React.Component<{model: Model}> {
  public model: Model;
  constructor(props) {
    super(props);
    this.model = props.model
  }

  render() {
    return (
      <div>
        <select>

        </select>
      </div>
    );
  }
}

class Content extends React.Component<{model: Model}> {
  public model: Model;
  constructor(props) {
    super(props);
    this.model = props.model
  }

  render() {
    return (
      <div>
        <div>{this.model.user.name}</div>
        <FileInput model={this.model}></FileInput>
        <SendBtn  model={this.model}></SendBtn>
        <AuthBtn model={this.model}></AuthBtn>
        <LogoutBtn model={this.model}></LogoutBtn>
        <PasteBtn  model={this.model}></PasteBtn>
        <NewWindowBtn  model={this.model}></NewWindowBtn>
        <TemplateList  model={this.model}></TemplateList>
      </div>
    );
  }
}


chrome.runtime.getBackgroundPage( (app: any) => {
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
