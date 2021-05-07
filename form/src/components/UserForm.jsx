import React, { useState } from 'react';


const UserForm = (props) => {
    const { inputs, setInputs } = props
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // const {inputsError, setInputsError} = ("");
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value

        })

        //     const createUser = (e) => {
        //         e.preventDefault();
        //         const newUser = {props};
        //         console.log("Welcome", newUser);
        //         setHasBeenSubmitted( true );

        //     const handleUser = (e) => {
        //         setInputs(e.target.value);
        //         if(e.target.value.length <1 ) {
        //             setInputsError("More than 1 character required!");
        //         } else if(e.target.value.length <3 ){
        //             setInputsError("Inputs must be 3 characters or longer!")
        //         }
        //     }
        // };

        //   const formMessage = () => {
        //         if( setHasBeenSubmitted ) {
        //             return "Thank you for submitting the form!";
        //         }else{
        //             return "Welcome, please submit the form";
    }
    return (
        <>

            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={onChange} name="firstName" value={inputs.firstName} />
                    {
                    inputs.firstName.length > 0 && inputs.firstName.length < 2 ?
                        <p style={{ color: 'red' }}>First name must be more than 2 characters</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={onChange} name="lastName" value={inputs.lastName} />
                    {
                    inputs.lastName.length > 0 && inputs.lastName.length < 2 ?
                        <p style={{ color: 'red' }}>Last name must be more than 2 characters</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={onChange} name="email" value={inputs.email} />
                    {
                    inputs.email.length > 0 && inputs.email.length < 5 ?
                        <p style={{ color: 'red' }}>Email must be more than 5 characters</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={onChange} name="password" value={inputs.password} />
                    {
                        inputs.password.length > 0 && inputs.password.length < 5 ?
                            <p style={{ color: 'red' }} > Password must be more than 5 characters.</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={onChange} name="confirmPassword" value={inputs.confirmPassword} />
                    {
                        inputs.confirmPassword.length > 0 && inputs.confirmPassword.length < 5 != inputs.password ?
                            <p style={{ color: 'red' }} > Passwords don't match!.</p> :
                            ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h2>User info</h2>
            <p>{inputs.firstName}</p>
            <p>{inputs.lastName}</p>
            <p>{inputs.email}</p>
            <p>{inputs.password}</p>


        </>
    );
};

export default UserForm;
