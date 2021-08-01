import './App.css';
import React, { useState } from 'react';
import NavBar from "./components/NavBar/NavBar"
import InfoBar from "./components/InfoBar/InfoBar"
import { Algorithms } from './Algorithms/Algorithms';

// Website title
const TITLE = "AlgoVis";

function App() {
  document.title = TITLE;

  // State regarding the algorithm in use
  const [algorithmInUse, setAlgorithmInUse] = useState(Algorithms["A_Star"]);

  return (
    <div className="App">
      <NavBar algorithmInUse={algorithmInUse} setAlgorithmInUse={setAlgorithmInUse}/>
      <InfoBar algorithmInUse={algorithmInUse} setAlgorithmInUse={setAlgorithmInUse}/>
    </div>
  );
}

export default App;
