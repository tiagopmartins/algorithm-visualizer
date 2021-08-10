/**
    File containing the definition of the Node class.
*/

// Colors (states) a node can have.

// Untouched state.
const WHITE = 0;
// Start node state.
const BLUE = 1;
// End node state.
const PURPLE = 2;
// Wall node state.
const BLACK = 3;

// Node class to represent a node in a graph.
class Node {
    /*
     * Constructor.
     *
     * @param color Node color
     * @param row Node row.
     * @param col Node col.
     * @param pos Position of the node in the array returned by "getElementsByClassName".
     */
    constructor(color, row, col, pos) {
        this.color = color;
        this.row = row;
        this.col = col;
        this.pos = pos;
    }

    // Color getter
    get getColor() {
        return this.color;
    }

    // Setting the colors (states) of a node.

    setWhite() {
        this.color = WHITE;
    }

    setStart() {
        this.color = BLUE;
    }

    setEnd() {
        this.color = PURPLE;
    }

    setWall() {
        this.color = BLACK;
    }
}

export default Node;