import React from 'react';
import WidgetsContainer from './WidgetsContainer';
import UserForm from '../components/UserForm';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities:
        [
          {id: 1, name: "Pabianice", url: "https://www.yahoo.com/news/weather/poland/pabianice/pabianice-511428", date: "2017-08-06", time: "8am", wind: "12km/h", temperature: "18stC", humidity: "79%", icon: "/src/containers/cloudly.png"},
           {id: 2, name: "Lódź", woeid: 505120, date: "2017-08-06", time: "8am", wind: "12km/h", temperature: "18stC", humidity: "79%", icon: "/src/containers/cloudly.png"}
        ],
      widgetsNumber: '',
      searchingText: ''
    };

    this.handleUserForm = this.handleUserForm.bind(this);
  }

  handleUserForm (enteredNumber) {
    const number = enteredNumber;
    console.log(number);
    if(number) {
      this.setState({widgetsNumber: number}, (number) => {
        console.log(this.state.widgetsNumber);
        for(let i=0; i<= number; i++){
          this.createNewCity();
        }
      });
    }
}

  createNewCity(enteredNumber) {
    let newCity = {};
    newCity.id = uuid();
    this.setState(..., newCity);
    // have to install npm install --save-dev babel-plugin-transform-object-rest-spread !!!!!!!
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
        <WidgetsContainer cities={this.state.cities}/>
        <div className="AppFooter">
          <h2>I am appFooter</h2>
        </div>
      </div>
    );
  }
}
export default App;
