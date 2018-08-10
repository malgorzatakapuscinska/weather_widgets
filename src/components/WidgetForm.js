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
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onWidgetFormSubmit(this.state.searchingText);
  }

  handleChange (event) {
    const searchingText = event.target.value;
    console.log(searchingText);
    this.setState({searchingText: searchingText});
    if (searchingText.length >3){
      this.props.onWidgetFormSubmit(searchingText);
    }
  }
  handleKeyUp = (event) =>{
    event.preventDefault();
    if(event.keyCode == 13){
       this.props.onWidgetFormSubmit(this.state.searchingText);
    }
  }

  handleClick (event) {
    event.stopPropagation();
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} onClick={this.handleClick}>
        <label>
        Name
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
