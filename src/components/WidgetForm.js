import React from 'react';

class WidgetForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchingText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange (e) {
    const searchingText = e.target.value;
    console.log(searchingText);
    this.setState({searchingText: searchingText});
    if (searchingText.length >2){
      this.props.onWidgetFormSubmit(searchingText);
    }
  }
  handleKeyUp (e)  {
    if(e.keyCode == 13){
       this.props.onWidgetFormSubmit(this.state.searchingText);
    }
  }
  render () {
    console.log(this.props.onWidgetFormSubmit);
    return (
      <form onSubmit={this.props.onWidgetFormSubmit}>
        <label>
        Name
          <input type="text" value={this.state.searchingText}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
          />
        </label>
      </form>
    );
  }
}
export default WidgetForm;
