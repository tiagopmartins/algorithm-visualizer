/*
 * Grid object to be visualized by the user.
 */

import "./Grid.css"
import React from "react"
import Square from "./Square"

// External representation of the algorithm visualizer.
function Grid(props) {
    return (
        <div className="visualizer">
            <ul className="grid">
                {props.algorithmVisualizer.grid.map((gridRow, index) => {
                    return (
                        <li>
                            <div key={index}>
                                {gridRow.map((node) => {
                                    return <Square row={node.row} col={node.col}/>
                                })}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// <Square row={node.row} col={node.col}/>

export default Grid;