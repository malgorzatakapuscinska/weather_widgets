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

  keys = [];

  handleSubmit(event) {
    if(!event) {

    const cityId = this.props.cityId;
    console.log(this.props.cityId);
    const searchURL = "http://localhost:3000/api/" + cityId+  "/" + this.state.searchingText;
    console.log(searchURL);
    console.log(this.state.searchingText);
    console.log(this.props.formFunction);

    const self = this;
    if(!this.state.searchingText) {
      return ;
    } else {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', searchURL, true);
        xhr.addEventListener('load', function(){
          if(xhr.status === 200){
            console.log(xhr.response);
            self.props.formFunction(JSON.parse(xhr.response));
          }
        });
      xhr.send();
     }
   }
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
    if ( this.keys[17] && this.keys[13] ) {
      this.handleSubmit();
    }
  }

  handleKeyUp = (event) =>{
    this.keys[event.keyCode] = false;
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
    return (
      <form onSubmit={this.handleSubmit} onClick={this.handleClick}>
        <label>
        Wpisz miasto:
          <input type="text" value={this.state.searchingText}
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
