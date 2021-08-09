/**
    Grid object to be visualized by the user.
*/

import "./Grid.css"
import React, { useState } from "react"
import Square from "./Square"

// External representation of the algorithm visualizer.
function Grid(props) {
    // State regarding the clicking of an element inside the grid
    const [clicked, setClicked] = useState(false);
    // States regarding the node selection
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isWall, setIsWall] = useState(false);

    // Handles the clicking of the grid
    const handleClick = () => setClicked(!clicked);

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
                                    return <Square clickedFlag={clicked} isStart={isStart} isEnd={isEnd} isWall={isWall}
                                            setIsStart={setIsStart} setIsEnd={setIsEnd} setIsWall={setIsWall}
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