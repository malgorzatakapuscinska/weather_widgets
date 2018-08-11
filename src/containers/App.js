import React from 'react';
import WidgetsContainer from './WidgetsContainer';
import UserForm from '../components/UserForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities:
        [
          {id: 1, name: "Pabianice", woeid: 12591196, date: "2017-08-06", time: "8am", wind: "12km/h", temperature: "18stC", humidity: "79%", icon: "https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png"},
           {id: 2, name: "Lódź", woeid: 505120, date: "2017-08-06", time: "8am", wind: "12km/h", temperature: "18stC", humidity: "79%", icon: "https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png"}
        ],
      widgetsNumber: '',
      searchingText: ''
    };
    this.handleWidgetFormSubmit =this.handleWidgetFormSubmit.bind(this);
    this.handleUserForm = this.handleUserForm.bind(this);
  }



  handleWidgetFormSubmit (searchingText) {
    const choosenCity = searchingText;
    this.setState({searchingText: choosenCity});
    console.log(this.state.searchingText);

  }

  handleUserForm (enteredNumber) {
    const number = enteredNumber;
    console.log(number);
    this.setState({widgetsNumber: number}, () => {console.log(this.state.widgetsNumber)});

  }

  render () {
    console.log(this.state.cities);
    return (
      <div>
        <div className="AppHeader">
          <p>I am the Header</p>
          <p>Hello</p>
          <p> I am stuck</p>
        </div>
        <div>
          <UserForm  onUserFormSubmit={this.handleUserForm} isCorrect={this.state.widgetsNumber<3&&this.state.cities.length===0? true:false}/>
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
