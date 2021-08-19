/**
    Information bar component, under the navigation bar, implementation.
*/
import "./InfoBar.css"
import React from "react"
import { AlgorithmsInfo } from '../../algorithms/AlgorithmsInfo';
import { a_star } from "../../algorithms/a-star"
import { BFS } from "../../algorithms/BFS"
import { DFS } from "../../algorithms/DFS"
import { dijkstras } from "../../algorithms/dijkstras"

// Information bar
function InfoBar(props) {

    // Script to run when the "Start" button is pressed.
    async function startButton() {
        if (!props.isStart && !props.isEnd && !props.ongoing) {
            props.setIsWall(false);     // Prevents bugs
            props.setReady(false);
            props.setOngoing(true);     // Currently an algorithm is running

            // Existing promises
            var promises;

            // Selecting the algortihm
            
            if (props.algorithmInUse === AlgorithmsInfo.A_Star)
                promises = a_star(props.algorithmVisualizer);

            else if (props.algorithmInUse === AlgorithmsInfo.BFS)
                promises = BFS(props.algorithmVisualizer);

            else if (props.algorithmInUse === AlgorithmsInfo.DFS)
                promises = DFS(props.algorithmVisualizer);

            else if (props.algorithmInUse === AlgorithmsInfo.Dijkstras)
                promises = dijkstras(props.algorithmVisualizer);

            // Waits for the BFS to finish
            await Promise.allSettled([promises]);

            promises = backtrackPath();
            
            // Waits for the backtracking to finish
            await Promise.allSettled([promises]);

            props.setOngoing(false);    // No algorithm running
        }
    }

    // Script to run when the "Clear" button is pressed.
    function clearButton() {
        if (props.ongoing)      // Algorithm ongoing
            return;

        props.setReady(true);   // Grid ready again

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

    // Finds the path from the start node to the end node.
    async function backtrackPath() {
        // Frontend squares
        let squares = document.getElementsByClassName("square");
        // Promises made
        var promises = new Array();
        // Current node being backtracked
        var current = props.algorithmVisualizer.endNode.previous;
        // Painting color
        let color = props.algorithmVisualizer.grid[current.col][current.row].getBacktrackColor();

        while (current != props.algorithmVisualizer.startNode) {
            squares[current.pos].style.background = color;
            current = current.previous;
            promises.push(await new Promise(r => setTimeout(r, 10)));
        }

        return promises;
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
            </ul>
        </div>
    );
}


export default InfoBar;