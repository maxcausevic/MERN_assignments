import React, { Component } from 'react';
import App from '../App';

class PersonCard extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            birthday: this.props.age
        };
    }
    birthdayButton = () => {
        // this.age += 1;
        console.log("Happy Birthday", this.props.firstName)
        //this is how we alter state
        this.setState({
            birthday: this.state.birthday +1 

        })
    }
    render() {
        return (
            <>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <p>Age:{this.state.birthday}</p>
                <p>Hair color:{this.props.hairColor}</p>
                <button onClick={this.birthdayButton}>Happy Birthday</button>
            </>
        )
    }
}
export default PersonCard;
