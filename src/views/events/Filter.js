import React,{Component} from 'react';
import {DropdownButton, Dropdown,ButtonToolbar } from 'react-bootstrap';
import { Calendar } from 'react-calendar';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.onChange = date => this.setState({ date })
  }
  render() {
    return (
      <div style={{
        paddingTop: '10px',
        paddingLeft: '380px',
        backgroundColor: 'transparent',
      }}>
      <ButtonToolbar>
      <DropdownButton variant="light" id="dropdown-item-button" title="Category">
      <Dropdown.Item as="button">Sport</Dropdown.Item>
      <Dropdown.Item as="button">Education</Dropdown.Item>
      <Dropdown.Item as="button">Concert</Dropdown.Item>
      <Dropdown.Item as="button">Art & Culture </Dropdown.Item>
      </DropdownButton>

      <DropdownButton variant="light" id="dropdown-item-button" title="Date">
      <Dropdown.Item as="button"><Calendar
            onChange = {this.onChange}
            value={this.state.date}
          /></Dropdown.Item>

      </DropdownButton>

      <DropdownButton variant="light" id="dropdown-item-button" title="Location">
      <Dropdown.Item as="button">Near</Dropdown.Item>
      <Dropdown.Item as="button">Far</Dropdown.Item>

      </DropdownButton>

      <DropdownButton variant="light" id="dropdown-item-button" title="Sort By">
      <Dropdown.Item as="button">Newest</Dropdown.Item>
      <Dropdown.Item as="button">Lastest</Dropdown.Item>

      </DropdownButton>

      </ButtonToolbar>
      </div>

    );
  }
}

export default Filter;
