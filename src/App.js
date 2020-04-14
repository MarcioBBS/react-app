import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Marcio', age: 41 },
      { name: 'Leah', age: 38 },
      { name: 'Julian', age: 1 }
    ]
  };
  
  switchNameHandler = () => {
    this.setState ({
      persons: [
        { name: 'Marcio Braz', age: 41 },
        { name: 'Leah', age: 38 },
        { name: 'Julian', age: 10 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Ahaaaa now it's working!!!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>By the way she's my wife!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // This code below gets compiled to the code above (JSX)
    //return  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a H1 element'));
    
  }
}

export default App;
