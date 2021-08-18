/**
    Information bar component, under the navigation bar, implementation.
*/
import "./InfoBar.css"
import React from "react"
import { AlgorithmsInfo } from '../../algorithms/AlgorithmsInfo';
import { a_star } from "../../algorithms/a-star"
import { bellman_ford } from "../../algorithms/bellman-ford"
import { BFS } from "../../algorithms/BFS"
import { DFS } from "../../algorithms/DFS"
import { dijkstras } from "../../algorithms/dijkstras"

// Information bar
function InfoBar(props) {

    // Script to run when the "Start" button is pressed.
    function startButton() {
        if (!props.isStart && !props.isEnd) {
            props.setIsWall(false);     // Prevents bugs

            // Selecting the algortihm
            
            if (props.algorithmInUse === AlgorithmsInfo.A_Star)
                a_star(props.algorithmVisualizer);

            else if (props.algorithmInUse === AlgorithmsInfo.Bellman_Ford)
                bellman_ford(props.algorithmVisualizer);

            else if (props.algorithmInUse === AlgorithmsInfo.BFS)
                BFS(props.algorithmVisualizer);

            else if (props.algorithmInUse === AlgorithmsInfo.DFS)
                DFS(props.algorithmVisualizer);

            else if (props.algorithmInUse === AlgorithmsInfo.Dijkstras)
                dijkstras(props.algorithmVisualizer);

            backtrackPath(props.algorithmVisualizer.startNode.col,
                          props.algorithmVisualizer.startNode.row,
                          props.algorithmVisualizer.endNode.col,
                          props.algorithmVisualizer.endNode.row);
        }
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

    // Finds the path from the start node to the end node
    async function backtrackPath(startCol, startRow, endCol, endRow) {
        // Frontend squares
        let squares = document.getElementsByClassName("square");

        // Current column and row
        let currCol = endCol;
        let currRow = endRow >= startRow ? endRow - 1 : endRow + 1;

        // Painting color
        let color = props.algorithmVisualizer.grid[currCol][currRow].getBacktrackColor();

        // Painting the path

        // End node visually below the start node
        if (endRow >= startRow) {
            while (currRow > startRow) {
                squares[props.algorithmVisualizer.grid[currCol][currRow].pos].style.background = color;
                currRow--;
                await new Promise(r => setTimeout(r, 10));
            }
        }

        // End node visually above the start node
        else {
            while (currRow < startRow) {
                squares[props.algorithmVisualizer.grid[currCol][currRow].pos].style.background = color;
                currRow++;
                await new Promise(r => setTimeout(r, 10));
            }
        }

        // End node to the right of the start node
        if (endCol >= startCol) {
            while (currCol > startCol) {
                squares[props.algorithmVisualizer.grid[currCol][currRow].pos].style.background = color;
                currCol--;
                await new Promise(r => setTimeout(r, 10));
            }
        }

        // End node to the left of the start node
        else {
            while (currCol < startCol) {
                squares[props.algorithmVisualizer.grid[currCol][currRow].pos].style.background = color;
                currCol++;
                await new Promise(r => setTimeout(r, 10));
            }
        }
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