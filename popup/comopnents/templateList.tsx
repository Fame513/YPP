import * as React from 'react';
import {Input, Row} from 'react-materialize';

export class TemplateList extends React.Component<{ model: Model }> {
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
      <div style={{display: 'flex'}}>
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
