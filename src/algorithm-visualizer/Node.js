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

// Color an expored node has.
const EXPLORED_COLOR = "rgb(51, 153, 255)";

// Node class to represent a node in a graph.
class Node {
    /*
     * Constructor.
     *
     * @param color Node color.
     * @param col Node col.
     * @param row Node row.
     * @param pos Position of the node in the array returned by "getElementsByClassName".
     */
    constructor(color, col, row, pos) {
        this.color = color;
        this.col = col;
        this.row = row;
        this.pos = pos;
        this.visited = false;   // flag to know if a the node was visited during an algorithm
    }

    getExploredColor() {
        return EXPLORED_COLOR;
    }

    // Setters

    set setColor(color) {
        this.color = color;
    }

    setWhite() {
        this.setColor = WHITE;
    }

    setStart() {
        this.setColor = BLUE;
    }

    setEnd() {
        this.setColor = PURPLE;
    }

    setWall() {
        this.setColor = BLACK;
    }

    setVisited(bool) {
        this.visited = bool;
    }

    isWall() {
        return this.color === BLACK;
    }

    isStart() {
        return this.color === BLUE;
    }

    isEnd() {
        return this.color === PURPLE;
    }

    isVisited() {
        return this.visited;
    }

    reset() {
        this.setWhite();
        this.setVisited(false);
    }
}

export default Node;