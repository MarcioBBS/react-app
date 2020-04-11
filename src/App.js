import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <span>Ahaaaa now it's working!!!</span>
        <Person name="Marcio" age="41" />
        <Person name="Leah" age="38">By the way she's my wife!</Person>
        <Person name="julian" age="1"/>
      </div>
    );

    // This code below gets compiled to the code above (JSX)
    //return  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a H1 element'));
    
  }
}

export default App;
