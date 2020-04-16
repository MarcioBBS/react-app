import React, { Component } from 'react';

// useState is the most important REACT HOOK, It allows us to manage state in the function-base component.
//import React, { useState } from 'react'; // For REACT HOOKS

import './App.css';
import Person from './Person/Person';


// Class-base Components: This is the establish/default syntax.
class App extends Component {

  state = {
    persons: [
      { name: 'Marcio', age: 41 },
      { name: 'Leah', age: 38 },
      { name: 'Julian', age: 1 }
    ]
  };
  
  switchNameHandler = (newName) => {
    this.setState ({
      persons: [
        { name: newName, age: 41 },
        { name: 'Leah', age: 38 },
        { name: 'Julian', age: 10 }
      ]
    });
  }

  nameChangeHandler = event => {
    this.setState ({
      persons: [
        { name: 'Marcio', age: 41 },
        { name: event.target.value, age: 38 },
        { name: 'Julian', age: 1 }
      ]
    }); 
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Ahaaaa now it's working!!!</p>
        <button onClick={ () => this.switchNameHandler('Marcio Braz')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Me!!!')} 
          change = {this.nameChangeHandler} >
          By the way she's my wife!
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );

    // This code below gets compiled to the code above (JSX)
    //return  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a H1 element'));
    
  }
}

export default App;

/*
// Functional components - Using REACT HOOKS
const app = props => {

  // useState returns a Array with two elements, ALWAYS two elements!!! 
  // The 1st element is the current state
  // The 2nd element is ALWAYS a function that allows us to update the current state and render the component
  
  const [ personsState, setPersonsState ] = useState({ // the names personsState and setPersonsState are completely optional
    persons: [
      { name: 'Marcio', age: 41 },
      { name: 'Leah', age: 38 },
      { name: 'Julian', age: 1 }
    ]
  });

  const [ otherState, setOtherState ] = useState('Some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState ({
      persons: [
        { name: 'Marcio Braz', age: 41 },
        { name: 'Leah', age: 38 },
        { name: 'Julian', age: 10 }
      ]     
    });
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <p>Ahaaaa now it's working!!!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>By the way she's my wife!</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
};  

export default app;
*/