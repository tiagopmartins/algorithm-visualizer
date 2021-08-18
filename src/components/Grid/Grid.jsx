/**
    Grid object to be visualized by the user.
*/

import "./Grid.css"
import React from "react"
import Square from "./Square"

// External representation of the algorithm visualizer.
function Grid(props) {
    // Handles the clicking of the grid
    const handleClick = () => props.setGridClicked(!props.gridClicked);

    // Counter definition.
    function Counter() {
        this.value = -1;
    }

    // Increments the value held by "Counter".
    Counter.prototype.increment = function() { this.value++; };

    // Keeps track of the current id value
    var counter = new Counter();

    return (
        <div className="visualizer">
            <ul className="grid" onClick={handleClick}>
                {props.algorithmVisualizer.grid.map((gridRow, index) => {
                    return (
                        <li>
                            <div key={index}>
                                {gridRow.map((node) => {
                                    // Next node position
                                    counter.increment();
                                    return <Square clickedFlag={props.gridClicked}
                                            isStart={props.isStart} isEnd={props.isEnd}
                                            isWall={props.isWall} setIsStart={props.setIsStart}
                                            setIsEnd={props.setIsEnd} setIsWall={props.setIsWall}
                                            algorithmVisualizer={props.algorithmVisualizer}
                                            row={node.row} col={node.col} collectionPos={counter.value}/>
                                })}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Grid;