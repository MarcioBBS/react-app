import React, { Component } from 'react';


const person = (props) => {
return <p>I'm {props.name} and I'm {props.age}</p>
}

export default person;


// If class-based components
/*
class Person extends Component {
    render () {
    return <p>I'm {this.props.name} and I'm {this.props.age}</p>
    }
}

export default Person;
*/