import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const {inputs, setInputs} = props
    const onChange = (e) => {
        setInputs({
            ...inputs, 
            [e.target.name]:e.target.value
        })
    }
   
    
    return(
<>
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ onChange } name = "firstName" value ={inputs.firstName}/>
            </div>
<div>
                <label>Last Name: </label> 
                <input type="text" onChange={ onChange } name = "lastName" value ={inputs.lastName} />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ onChange} name = "email" value ={inputs.email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ onChange} name = "password" value ={inputs.password} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ onChange } name = "confirmPassword" value = {inputs.confirmPassword} />
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
