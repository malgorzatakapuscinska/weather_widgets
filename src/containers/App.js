import React from 'react';
import WidgetsContainer from "../containers/WidgetsContainer";
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cities:
      [
         {id: 1, name: "Pabianice", woeid: 12591196, date: "2017-08-06 8am", wind: "12km/h", temperature: "18stC", humidity: "79%", icon: "src/containers/cloudly.png"},
         {id: 2, name: "Lódź", woeid: 505120, date: "2017-08-06 8am", wind: "12km/h", temperature: "18stC", humidity: "79%", icon: "src/containers/cloudly.png"}
      ]
    }
  }
  render () {
    console.log(this.state);
    return (
      <WidgetsContainer cities={this.state.cities}/>
    );
  }
}
export default App;
