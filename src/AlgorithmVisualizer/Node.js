/*
 * File containing the definition of the Node class.
 */

// Colors (states) a node can have.

// Untouched state.
const WHITE = 0;
// Start node state.
const RED = 1;
// End node state.
const GREEN = 2;
// Wall node state.
const BLACK = 4;

// Node class to represent a node in a graph.
class Node {
    constructor(color, row, col) {
        this.color = color;
        this.row = row;
        this.col = col;
    }

    // Setting the states of a node.

    setWhite() {
        this.color = WHITE;
    }

    setStart() {
        this.color = RED;
    }

    setEnd() {
        this.color = GREEN;
    }

    setWall() {
        this.color = BLACK;
    }
}

export default Node;