import './App.css';
import NavBar from "./components/NavBar/NavBar"
import { Component } from 'react';

// Webpage title
const TITLE = "Algorithm Visualizer";

class App extends Component {
  render() {
    document.title = TITLE;
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
