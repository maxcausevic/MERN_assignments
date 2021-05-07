import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'
import { useState } from 'react';

function App() {
  const [ inputs, setInputs] = useState({ 
    firstName : "",
    lastName :"",
    email :"",
    password: "",
    confirmPassword: "",
    hasBeenSubmitted: false
  });
   
  return (
    <div className="App">
      <UserForm inputs={inputs} setInputs={setInputs}/>
  
    </div>
  );
}

export default App;
