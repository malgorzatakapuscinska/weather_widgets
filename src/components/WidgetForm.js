import React from 'react';
import axios from 'axios';
class WidgetForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchingText: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  keys = [];

  handleSubmit () {

    const {cityId, formFunction} = this.props;
    const {searchingText} = this.state;
    console.log(this.props.cityId);
    const searchURL = `http://localhost:3000/api/${cityId}/${searchingText}`;

    console.log(searchURL);
    console.log(searchingText);
    console.log(formFunction);

    !searchingText ? null : axios.get(searchURL)
      .then(function (response) {
        console.log(response.data);
        formFunction(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
        /*let xhr = new XMLHttpRequest();
        xhr.open('GET', searchURL, true);
        xhr.addEventListener('load', function(){
          if(xhr.status === 200){
            console.log(xhr.response);
            self.props.formFunction(JSON.parse(xhr.response));
          }
        });
      xhr.send();*/
  }

  handleChange (event) {
    const searchingText = event.target.value;
    console.log(searchingText);
    this.setState({searchingText});
  }

  handleKeyDown = (event) => {
    this.keys[event.keyCode] = true;
    console.log(this.keys);
    console.log(event.keyCode);
    event.keyCode === 13 ? event.preventDefault() : null;
    this.keys[17] && this.keys[13] ? this.handleSubmit() : null;
  }

  handleKeyUp = (event) => {
    this.keys = [];
    console.log(this.keys);
    /*event.preventDefault();
    if(event.keyCode == 13){
      this.setState({searchingText: event.target.value});
    }*/
  }

  handleClick (event) {
    event.stopPropagation();
  }

  render () {
    console.log(this.props);
    const {searchingText} = this.state;
    console.log(searchingText);
    return (
      <form  onClick={this.handleClick}>
        <label>
        Wpisz miasto:
          <input type="text" value={searchingText}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            onKeyDown={this.handleKeyDown}
            onClick={this.handleClick}
          />
        </label>
      </form>
    );
  }
}
export default WidgetForm;
