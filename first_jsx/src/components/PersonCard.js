import React, {Component} from 'react';
import App from '../App';

class PersonCard extends Component{
    render(){
        return(
            <>
            <h1>{this.props.firstName} {this.props.lastName}</h1>
            <p>Age:{this.props.age}</p>
            <p>Hair color:{this.props.hairColor}</p>
            </>
        )
    }
}
export default PersonCard;