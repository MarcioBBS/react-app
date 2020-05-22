import React, { Component } from 'react';

// useState is the most important REACT HOOK, It allows us to manage state in the function-base component.
//import React, { useState } from 'react'; // For REACT HOOKS

import './App.css';
import Person from './Person/Person';

// Class-base Components: This is the establish/default syntax.
class App extends Component {

  state = {
    persons: [
      { id: 'a01', name: 'Marcio', age: 41 },
      { id: 'a02', name: 'Leah', age: 38 },
      { id: 'a03', name: 'Julian', age: 1 }
    ],

    showPersons : false
  };
  
  nameChangeHandler = (id, event) => {
    // Find the person and assign it to a constant
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    // Get the person itself (create a copy from the original)
    const person = { ...this.state.persons[personIndex] };
    // Another way [line above] using Object.assign ---> const persons = Object.assign({}, this.state.persons[personIndex]);

    // Update the person name (copy)
    person.name = event.target.value;

    // Create a new persons Array and Update it with the new value.
    const persons = [...this.state.persons];
    persons[personIndex] = person; 

    // Set the new state
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }

  deletePersonHandler = personIndex => {
    
    /* BAD Practice as it mutates the original Array.
    const persons = this.state.persons; // persons holds a pointer to the state property. NOTE: Objects & Arrays are referenced types.
    persons.splice(personIndex, 1); // Removes 1 item on the array. This way is a BAD practice as it's mutating the original Array.
    */

    /* Better practice here is to create a original copy of the Array. We can use Slice() method, WITHOUT passing any arguments
      Or using Spread Operator, which is a new ES6 feature, thus more modern.
    */
    //const persons = this.state.persons.slice();  // Using Slice() to copy the original Array
    const persons = [...this.state.persons]; // Using Spread operator. New ES6, more modern
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render() {

    const styleButton = {
      backgroundColor: 'green',
      font: 'inherit',
      color: '#fff',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };

    let persons = null;
    
    // Output content Conditionally
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            /** If using bind():  click={ this.deletePersonHandler.bind(index) }   */
            return <Person name = {person.name} age = {person.age} key = {person.id} 
              click = { () => this.deletePersonHandler(index) }
              /** If using bind():  change = { this.nameChangeHandler.bind(person.id) }   */
              change = { event => this.nameChangeHandler(person.id, event) }
            /> 
          })}
        </div> 
      );

      styleButton.backgroundColor = 'red';

    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p className= {classes.join(' ')}>Ahaaaa now it's working!!!</p>
        <button
          style={styleButton}
          onClick={ this.togglePersonsHandler }>Show Persons</button>

        { persons }

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