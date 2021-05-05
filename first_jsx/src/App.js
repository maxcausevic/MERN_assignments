import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Maxine"}lastName={"Causevic"}age={33} hairColor={"black"}/>
      <PersonCard firstName={"Allen"}lastName={"Causevic"}age={36} hairColor={"brown"}/>
      <PersonCard firstName={"Mia"}lastName={"Causevic"}age={1} hairColor={"brown"}/>
      <PersonCard firstName={"Kimberly"}lastName={"Wiskup"}age={34} hairColor={"blonde"}/>
      

      <header className="App-header">
      <>                
                <h1>Hello Dojo!</h1>                
                <h3>Things I need to do:</h3> 
                <ul>
                  <li>Learn React</li>
                  <li>Climb Mt. Everest</li>
                  <li>Run a Marathon</li>
                  <li>Feed the dogs</li>
                  </ul>           
            </> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

