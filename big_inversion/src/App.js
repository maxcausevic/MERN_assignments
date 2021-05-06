import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';
function App() {
  return (
    
    <div className="App">
      <PersonCard firstName={"John"} lastName={"Smith"} age={ 8 } hairColor={"Brown"} />
      <PersonCard firstName={"Maxine"} lastName={"Causevic"} age={ 33 } hairColor={"black"} />
      <PersonCard firstName={"Allen"} lastName={"Causevic"} age={ 36 } hairColor={"Brown"} />
      <PersonCard firstName={"Mia"} lastName={"Causevic"} age={ 1 } hairColor={"Brown"} />
    </div>
  );
}

export default App;
