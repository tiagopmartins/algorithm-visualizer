import './App.css';
import React, { useState } from 'react';
import NavBar from "./components/NavBar/NavBar"
import InfoBar from "./components/InfoBar/InfoBar"
import { AlgorithmsInfo } from './Algorithms/AlgorithmsInfo';
import Grid from "./components/Grid/Grid"
import AlgorithmVisualizer from "./AlgorithmVisualizer/AlgorithmVisualizer"

// Website title
const TITLE = "AlgoVis";
// Height of the visualizer (in squares).
const VIS_HEIGHT = 27;
// Width of the visuazlier (in squares).
const VIS_WIDTH = 45;

function App() {
  document.title = TITLE;

  // State regarding the algorithm in use
  const [algorithmInUse, setAlgorithmInUse] = useState(AlgorithmsInfo["A_Star"]);

  // Internal grid
  var algorithmVisualizer = new AlgorithmVisualizer(VIS_HEIGHT, VIS_WIDTH);

  return (
    <div className="App">
      <NavBar algorithmInUse={algorithmInUse} setAlgorithmInUse={setAlgorithmInUse}/>
      <InfoBar algorithmInUse={algorithmInUse} setAlgorithmInUse={setAlgorithmInUse}/>
      <Grid algorithmVisualizer={algorithmVisualizer}/>
    </div>
  );
}

export default App;
