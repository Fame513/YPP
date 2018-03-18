import * as React from 'react';
import {Icon, Button} from 'react-materialize';
import {DetailedHTMLProps, HTMLAttributes} from 'react';

export class UserArea extends React.Component<{ model:  Model }> {
  public model: Model;

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  login() {
    this.model.openAuthWindow();
  }
  
  logout() {
    this.model.logout();
  }
  
  render() {
    const nameStyle = {
      fontSize: '16px',
      padding: '0px 8px'
    };
    
    const icoStyle = {
      cursor: 'pointer'
    };
    
    if (this.model.user && this.model.user.email) {
      return (<div style={{ display: 'flex', flexDirection: 'row', flexAlign: 'center', justifyContent: 'center' }}>
          <span style={nameStyle}>{this.model.user.name}</span>
        <span style={icoStyle} onClick={this.logout.bind(this)}>
          <Icon >exit_to_app</Icon>
        </span>
      </div>)
    } else {
      return(<Button onClick={this.login.bind(this)}>Auth</Button>)
    }
    
    
  }
}