import React from 'react';

class WidgetForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchingText: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onChange (event) {
    const searchingText = event.target.value;
    console.log(searchingText);
    this.setState({searchingText: searchingText});
    if (searchingText.length >2){
      this.props.onWidgetFormSubmit(searchingText);
    }
  }
  onKeyUp (event) {
    if(event.keykode === 13){
       this.props.handleWidgetFormSubmit(this.state.searchingText);
    }
  }
  render () {
    console.log(this.props.onWidgetFormSubmit);
    return (
      <form onSubmit={this.props.onWidgetFormSubmit}>
        <label>
        Name
          <input type="text" value={this.state.searchingText}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </label>
      </form>
    );
  }
}
export default WidgetForm;
