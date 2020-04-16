import React from 'react';
import './Person.css'


const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} placeholder={props.name}/>
        </div>        
    ) 
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