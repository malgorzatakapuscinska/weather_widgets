import React, {Component} from 'react';
import WidgetsContainer from "./WidgetsContainer";
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities:
        [
           {id: 1, name: "Pabianice", woeid: 12591196, date: "2017-08-06", time: "8am", wind: "12km/h", temperature: "18stC", humidity: "79%", icon: "src/containers/cloudly.png"},
           {id: 2, name: "Lódź", woeid: 505120, date: "2017-08-06", time: "8am", wind: "12km/h", temperature: "18stC", humidity: "79%", icon: "src/containers/cloudly.png"}
        ],
      widgetsNumber: '',
      searchingText: ''
    };
    this.handleWidgetFormSubmit =this.handleWidgetFormSubmit.bind(this);
  }
  handleWidgetFormSubmit(searchingText) {
    const chosenCity = searchingText;
    this.setState({searchingText: chosenCity});
    console.log(searchingText);
  }
  render () {
    console.log(this.state);
    return (
      <div>
        <div className="AppHeader">
          <h1> I am app Header </h1>
        </div>
        <WidgetsContainer cities={this.state.cities} onWidgetFormSubmit={this.handleWidgetFormSubmit}/>
        <div className="AppFooter">
          <h2>I am appFooter</h2>
        </div>
      </div>
    );
  }
}
export default App;
