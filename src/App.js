import './App.css';
import React, { useState } from 'react';
import NavBar from "./components/NavBar/NavBar"
import InfoBar from "./components/InfoBar/InfoBar"
import { AlgorithmsInfo } from './algorithms/AlgorithmsInfo';
import Grid from "./components/Grid/Grid"
import AlgorithmVisualizer from "./algorithm-visualizer/AlgorithmVisualizer"

// Website title
const TITLE = "AlgoVis";
// Height of the visualizer (in squares).
const VIS_HEIGHT = 33;
// Width of the visualizer (in squares).
const VIS_WIDTH = 72;

// Main algorithm visualizer. Internal representation.
var algorithmVisualizer = new AlgorithmVisualizer(VIS_HEIGHT, VIS_WIDTH);

function App() {
  document.title = TITLE;

  // State regarding the algorithm in use
  const [algorithmInUse, setAlgorithmInUse] = useState(AlgorithmsInfo["A_Star"]);
  // State regarding the clicking of an element inside the grid
  const [gridClicked, setGridClicked] = useState(false);
  // States regarding the node selection
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isWall, setIsWall] = useState(false);

  return (
    <div className="App">
      <NavBar algorithmInUse={algorithmInUse} setAlgorithmInUse={setAlgorithmInUse}/>

      <InfoBar algorithmVisualizer={algorithmVisualizer} algorithmInUse={algorithmInUse}
               setAlgorithmInUse={setAlgorithmInUse} isStart={isStart} setIsStart={setIsStart}
               isEnd={isEnd} setIsEnd={setIsEnd} setIsWall={setIsWall}/>

      <Grid algorithmVisualizer={algorithmVisualizer} gridClicked={gridClicked}
            setGridClicked={setGridClicked} isStart={isStart} setIsStart={setIsStart}
            isEnd={isEnd} setIsEnd={setIsEnd} isWall={isWall} setIsWall={setIsWall}/>
    </div>
  );
}

export default App;
