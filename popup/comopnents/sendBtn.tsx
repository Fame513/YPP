import * as React from 'react';

export class SendBtn extends React.Component<{app: any}> {
  public app: any;
  constructor(props) {
    super(props);
    this.app = props.app
  }
  
  render() {
    return (
      <button onClick={this.sendNotification}>Send</button>
    );
  }

  sendNotification() {
    chrome.notifications.create('id', {message: 'message', type: 'basic', title: 'title', iconUrl: 'https://habrastorage.org/getpro/habr/avatars/4ec/bd0/85d/4ecbd085d692835a931d03174ff19539.png'})
  }
}