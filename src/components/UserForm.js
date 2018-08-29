import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    /*this.handleKeyUp = this.handleKeyUp.bind(this);*/
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.onUserFormSubmit(this.state.number);
  }

  handleChange (event) {
    console.log(event.target.value);
    const enteredNumber= event.target.value;
    const enteredNumberParsed = parseInt(enteredNumber);

    const isNumber = typeof(enteredNumberParsed);
    console.log(enteredNumber);
    console.log(isNumber);
    this.setState({number: enteredNumberParsed}, () => {console.log(this.state);
    this.props.onUserFormSubmit(enteredNumberParsed);
    });
  }

   handleKeyUp = (event) =>{
     event.preventDefault();
     console.log(this.state.number);
     if(event.keyCode == 13){
        this.setState({number: 3}, function(){
        this.props.onUserFormSubmit(this.state.number);
      });

    }
   }

  render () {

    const isCorrect = this.props.isCorrect;
    if(isCorrect === true){
      return (
        <div>
          <h1> Witaj w aplkacji wyświetlającej widgety pogodowe dla wybranych miast </h1>
          <p>Wpisz w polu poniżej ilość miast w których chcesz śledzić pogodę (maksymalna ilość wynosi 5)</p>
          <p>Domyślna ilość to 3 jeśli nie chcesz jej zmieniać wciśnij enter</p>
          <form onSubmit={this.handleSubmit}>
            <label>
            Liczba widgetów
              <input type="text" value={this.state.number}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
              />
            </label>
          </form>
        </div>
      );
    } else {return (null);}
  }
}


export default UserForm;
