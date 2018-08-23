import React from 'react';
import WidgetsContainer from './WidgetsContainer';
import UserForm from '../components/UserForm';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities:[],
      widgetsNumber: '',
    };

    this.handleUserForm = this.handleUserForm.bind(this);
    this.handleWidgetFormSubmit = this.handleWidgetFormSubmit.bind(this);
    }

  handleUserForm (enteredNumber) {
    const number = enteredNumber;
    console.log(number);
    if(number < 6) {
      this.setState({widgetsNumber: number}, (number) => {
        console.log(this.state.widgetsNumber);
      });
      for(let i=0; i<number; i++){
        console.log('*');
        this.createNewCity()
          .then(newCity => {
            this.setState({cities: [...this.state.cities, newCity]}, () => {console.log(this.state);});
          })
          .catch(reason => console.log('Coś poszło nie tak'));
      }
    }
  }

  handleWidgetFormSubmit (apiResponse){
    const apiRes = apiResponse;
    const id = apiRes.id;
    console.log(apiResponse);
    console.log(id);
    console.log(this.findCity);
    console.log(this.state.cities[0]);
    const city = this.state.cities.findIndex((city) => city.id === id);
    console.log(city);
    /*this.state.cities[0] = apiRes;
    console.log(this.state.cities[0]);*/
    this.setState(this.state.cities[city] = apiRes);
  }

  findCity (id) {
    if(this.state.cities.id === id)
   return this.state.cities.id ;
  }

  createNewCity() {
    return new Promise(
      function(resolve, reject){
        let newCity = {};
        newCity.id = uuid();
        console.log(newCity);
        if(newCity.id !== 0){
          resolve(newCity);
        }else {reject(reason);}

    });
  }

  render () {
    console.log(this.state.cities);
    return (
      <div>
        <div className="AppHeader">
          <p>I am the Header</p>
        </div>
        <UserForm  onUserFormSubmit={this.handleUserForm} isCorrect={this.state.widgetsNumber<3&&this.state.cities.length===0? true:false}/>
        <WidgetsContainer formFunction={this.handleWidgetFormSubmit} cities={this.state.cities}/>
        <div className="AppFooter">
          <h2>I am appFooter</h2>
        </div>
      </div>
    );
  }
}
export default App;
