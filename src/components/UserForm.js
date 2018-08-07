import React, {Component} from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      number: ''
    }
  }

  render() {
    return (
      <form >
        <label>
        Liczba widgetów
          <input type="text" max-length="1" name={this.props.number} />
        </label>
      </form>
    );
  }
}


export default UserForm;
