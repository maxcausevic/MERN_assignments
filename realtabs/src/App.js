import logo from './logo.svg';
import './App.css';


import Tabs from "./components/Tabs"

function App() {
  const tabItems =[
    {header: "Tab 1", content: "Some cool content"}, 
    {header: "Tab 2", content: "Other cool content"}, 
    {header: "Tab 3", content: "some other cool content"},
  ];
  return (
    <div className="container pt-3">
      <Tabs items={tabItems}/>
    </div>
  );
}

export default App;
