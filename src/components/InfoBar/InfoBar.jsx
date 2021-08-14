/**
    Information bar component, under the navigation bar, implementation.
*/
import "./InfoBar.css"
import React from "react"
import { BFS } from "../../algorithms/BFS"

// Information bar
function InfoBar(props) {
    // Script to run when the "Start" button is pressed.
    function startButton() {
        BFS(props.algorithmVisualizer);
    }

    // Script to run when the "Clear" button is pressed.
    function clearButton() {
        // Clearing the internal representation
        props.algorithmVisualizer.clearGrid();

        // Clearing the visualization
        let squares = document.getElementsByClassName("square");
        for (let i = 0; i < squares.length; i++)
            squares[i].style.background = "white";

        // Reseting the states
        props.setIsStart(true);
        props.setIsEnd(false);
        props.setIsWall(false);
    }

    return (
        <div className="infobar">
            <ul className="infobar-menu">
                <li key="0">
                    <text className="infobar-el-text"><b>{props.algorithmInUse.name}</b></text>
                </li>
                <li key="1">
                    <button className="infobar-el" onClick={startButton}>Start</button>
                </li>
                <li key="2">
                    <button className="infobar-el" onClick={clearButton}>Clear</button>
                </li>
                <li key="3">
                    <button className="infobar-el">About</button>
                </li>
                <li key="4">
                    <button className="infobar-el">View Code</button>
                </li>
            </ul>
        </div>
    );
}


export default InfoBar;