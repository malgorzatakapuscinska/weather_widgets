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
    this.setState({searchingText: searchingText});
    if (searchingText.length >2){
      this.props.onSeaarch(searchingText);
    }
  }
  onKeyUp (event) {
    if(event.keykode === 13){
       this.props.onSearch(this.state.searchingText);
    }
  }
  render () {
    return (
      <form >
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
