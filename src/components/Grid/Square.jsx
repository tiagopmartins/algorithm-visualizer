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
     */
    constructor(props) {
        super(props);
        this.row = props.row;
        this.col = props.col;
    }

    render() {
        return (
            <div className="square"></div>
        );
    }
}

export default Square;