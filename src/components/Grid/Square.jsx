/*
 * Square component to be visualized by the user.
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
        this.props.algorithmVisualizer.grid[this.row][this.col].setWall();
        document.getElementsByClassName("square")[this.pos].style.background = "black";
    }

    // Handles the dragging of the mouse over a node.
    handleDrag() {
        if (this.props.clickedFlag) {
            this.props.algorithmVisualizer.grid[this.row][this.col].setWall();
            document.getElementsByClassName("square")[this.pos].style.background = "black";
        }
    }

    render() {
        return (
            <div className="square" onClick={this.handleClick} onMouseEnter={this.handleDrag}></div>
        );
    }
}

export default Square;