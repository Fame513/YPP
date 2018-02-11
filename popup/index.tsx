import * as React from 'react';
import * as ReactDOM from 'react-dom';

const element = <h1>Hello, worlasdasdd!</h1>;

class FileInput extends React.Component {
  render() {
    return (
      <input type="file" multiple></input>
    );
  }
}

class SendBtn extends React.Component {
  render() {
    return (
      <button>Send</button>
    );
  }
}

class AuthBtn extends React.Component {
  render() {
    return (
      <button>Auth</button>
    );
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
      <button id='post-btn'>Paste</button>
    );
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
      <select>

      </select>
    );
  }
}

class Content extends React.Component {
  render() {
    return
  }
}

ReactDOM.render(
  <FileInput/>, <SendBtn/>, <AuthBtn/>, <LogutBtn/>, <PasteBtn/>, <NewWindowBtn/>, <TemplateList/>
  document.getElementById('content')
);