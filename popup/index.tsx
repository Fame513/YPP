import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize'
import {SendBtn} from './comopnents/sendBtn';

class AuthBtn extends React.Component<{app: any}> {
  public app: any;
  constructor(props) {
    super(props);
    this.app = props.app
  }

  render() {
    return (
      <Button onClick={this.login}>Auth</Button>
    );
  }

  login() {
    this.app.openAuthWindow();
  }
}

class FileInput extends React.Component<{app: any}> {

  public app: any;
  constructor(props) {
    super(props);
    this.app = props.app
  }
  
  render() {
    return (
      <input type="file" multiple></input>
    );
  }
}

class LogutBtn extends React.Component<{app: any}> {
  public app: any;
  constructor(props) {
    super(props);
    this.app = props.app
  }

  render() {
    return (
      <button>Logout</button>
    );
  }
}

class PasteBtn extends React.Component<{app: any}> {
  public app: any;
  constructor(props) {
    super(props);
    this.app = props.app
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

class NewWindowBtn extends React.Component<{app: any}> {
  public app: any;
  constructor(props) {
    super(props);
    this.app = props.app
  }

  render() {
    return (
      <button id="open-btn">Open new window</button>
    );
  }
}

class TemplateList extends React.Component<{app: any}> {
  public app: any;
  constructor(props) {
    super(props);
    this.app = props.app
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



chrome.runtime.getBackgroundPage(function (app: any) {



  

 
  class Content extends React.Component {
    render() {
      return (
        <div>
          <FileInput app={app}></FileInput>
          <SendBtn  app={app}></SendBtn>
          <AuthBtn app={app}></AuthBtn>
          <LogutBtn  app={app}></LogutBtn>
          <PasteBtn  app={app}></PasteBtn>
          <NewWindowBtn  app={app}></NewWindowBtn>
          <TemplateList  app={app}></TemplateList>
        </div>
      );
    }
  }


  ReactDOM.render(
    <Content></Content>,
    document.getElementById('content')
  );

});
