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
const EXPLORED_COLOR = "#4775FF";
// Color used for the backtracking of the path.
const BACKTRACK_COLOR = "#F6AE2D";

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
        this.visited = false;   // Flag to know if a the node was visited during an algorithm
        this.previous = null;   // Copy of the previous node in the path
    }

    getExploredColor() {
        return EXPLORED_COLOR;
    }

    getBacktrackColor() {
        return BACKTRACK_COLOR;
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