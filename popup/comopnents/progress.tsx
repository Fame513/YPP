import * as React from 'react';
import {Input, Row, Preloader, ProgressBar} from 'react-materialize';


export class Progress extends React.Component<{ model: Model }> {
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
