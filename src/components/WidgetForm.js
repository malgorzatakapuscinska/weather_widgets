import React from 'react';

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
    this.handleWidgetFormSubmit =this.handleWidgetFormSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const cityId = this.props.cityId;
    console.log(this.props.cityId);
    /*this.props.onWidgetFormSubmit(this.state.searchingText);*/
    const searchURL = "http://localhost:3000/api/" + cityId+  "/" + this.state.searchingText;
    console.log(searchURL);
    console.log(this.state.searchingText);

    if(!this.state.searchingText) {
      return ;
    } else {
      let xhr = new XMLHttpRequest;
      xhr.open('GET', searchURL, true);
      xhr.send();
     }
  }

  handleChange (event) {
    const searchingText = event.target.value;
    console.log(searchingText);
    this.setState({searchingText});
  }
  handleKeyUp = (event) =>{
    event.preventDefault();
    if(event.keyCode == 13){
       /*this.props.onWidgetFormSubmit(this.state.searchingText);*/
      this.setState({searchingText: event.target.value});
    }
  }

  handleClick (event) {
    event.stopPropagation();
  }

  handleWidgetFormSubmit (searchingText) {
    /*const choosenCity = searchingText;*/
    /*this.setState({searchingText});
    console.log(searchingText);
    console.log(this.state.searchingText);
    searchingText = "";*/
    const searchURL = "http://localhost:3000/api/" + this.state.searchingText;
    console.log(searchURL);
    /*const x = !searchingText;
    console.log(x);*/
    if(!searchingText) {
      return ;
    } else {
      let xhr = new XMLHttpRequest;
      xhr.open('GET', searchURL, true);
      xhr.send();
     }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} onClick={this.handleClick}>
        <label>
        Wpisz miasto i wojweództwo po przecinku
          <input type="text" value={this.state.searchingText}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            onClick={this.handleClick}
          />
        </label>
      </form>
    );
  }
}
export default WidgetForm;
