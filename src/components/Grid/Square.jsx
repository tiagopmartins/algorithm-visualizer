/**
    Square component to be visualized by the user.
*/

import "./Square.css"
import React, { Component } from "react"

// Grid's square.
class Square extends Component {
    /*
     * Constructor function.
     *
     * @param row Square row.
     * @param col Square column.
     * @param pos Position of the HTML element on the HTML collection return by
     *            "getElementsByClassName".
     */
    constructor(props) {
        super(props);
        this.row = props.row;
        this.col = props.col;
        this.pos = props.collectionPos;
        this.handleClick = this.handleClick.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    // Handles the clicking of a node.
    handleClick() {
        if (this.props.isStart) {
            // Set the node to the start point
            this.props.algorithmVisualizer.setStartNode(this.col, this.row);
            // Only one start node, next is the end node
            this.props.setIsStart(false);
            this.props.setIsEnd(true);
        }

        else if (this.props.isEnd) {
            // Set the node to the end point
            this.props.algorithmVisualizer.setEndNode(this.col, this.row);
            // Only one end node, next are the wall nodes
            this.props.setIsEnd(false);
            this.props.setIsWall(true);
        }

        else if (this.props.isWall)
            this.props.algorithmVisualizer.setWallNode(this.col, this.row);
    }

    // Handles the dragging of the mouse over a node.
    handleDrag() {
        if (this.props.clickedFlag && this.props.isWall &&                               // Grid was clicked and the node will be a wall
            !this.props.algorithmVisualizer.grid[this.col][this.row].isStart() &&       // if it isnt already the start or end node
            !this.props.algorithmVisualizer.grid[this.col][this.row].isEnd()) {

            this.props.algorithmVisualizer.setWallNode(this.col, this.row);
        }
    }

    render() {
        return (
            <div className="square" onClick={this.handleClick} onMouseEnter={this.handleDrag}></div>
        );
    }
}

export default Square;