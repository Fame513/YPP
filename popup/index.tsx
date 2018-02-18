import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize'
import {SendBtn} from './comopnents/sendBtn';


chrome.runtime.getBackgroundPage(function (app: any) {


  class FileInput extends React.Component {
    render() {
      return (
        <input type="file" multiple></input>
      ); 
    }
  }

  class AuthBtn extends React.Component {
    render() {
      return (
        <Button onClick={this.login}>Auth</Button>
      );
    }

    login() {
      app.openAuthWindow();
    }
  }

  class LogutBtn extends React.Component {
    render() {
      return (
        <button>Logout</button>
      );
    }
  }

  class PasteBtn extends React.Component {
    render() {
      return (
        <button onClick={this.pasteCode}>Paste</button>
      );
    }

    pasteCode() {
      console.log('past');
    }
  }

  class NewWindowBtn extends React.Component {
    render() {
      return (
        <button id="open-btn">Open new window</button>
      );
    }
  }

  class TemplateList extends React.Component {
    render() {
      return (
        <div>
          <select>

          </select>
        </div>
      );
    }
  }

  class Content extends React.Component {
    render() {
      return (
        <div>
          <FileInput></FileInput>
          <SendBtn></SendBtn>
          <AuthBtn></AuthBtn>
          <LogutBtn></LogutBtn>
          <PasteBtn></PasteBtn>
          <NewWindowBtn></NewWindowBtn>
          <TemplateList></TemplateList>
        </div>
      );
    }
  }


  ReactDOM.render(
    <Content></Content>,
    document.getElementById('content')
  );

});
