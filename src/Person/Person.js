import React from 'react';
import './Person.css'
// import Radium from 'radium';
import styled from 'styled-components';

// Storing the result of the .div method (from the styled object) inside of StyledDiv constant.
// Note: Using regular CSS
// StyledDiv returns a React component, that's the reason the 1st letter is uppercase StyleDiv instead of styledDiv
const StyledDiv = styled.div `

    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = props => {
    return (
        // <div className= "Person" style= {style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} placeholder={props.name}/>
        </StyledDiv>
        // </div>
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