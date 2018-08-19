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
    }

  handleUserForm (enteredNumber) {
    const number = enteredNumber;
    console.log(number);
    if(number) {
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
