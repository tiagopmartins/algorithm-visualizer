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
const EXPLORED_COLOR = "#4077FF";
// Color used for the backtracking of the path when NOT using the rainbow mode.
const BACKTRACK_COLOR = "#F6AE2D";
// Rainbow colors (first --> last).
const RAINBOW = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];
// Color used for the backtracking of the path when using the rainbow mode.
const RAINBOW_BACKTRACK_COLOR = "#000000";

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
        this.g_value = 0;       // A* variable. Current cost to reach the end node
        this.h_value = 0;       // A* variable. Estimated cost from the current node to the end node
        this.f_value = 0;       // A* variable. f_value = g_value + h_value
        this.rainbowColorN = 0; // Index of the rainbow color to use
    }

    getExploredColor() {
        return EXPLORED_COLOR;
    }

    getRainbowColors() {
        return RAINBOW;
    }

    getBacktrackColor() {
        return BACKTRACK_COLOR;
    }

    getRainbowBacktrackColor() {
        return RAINBOW_BACKTRACK_COLOR;
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
        this.previous = null;
        this.g_value = 0;
        this.h_value = 0;
        this.f_value = 0;
    }
}

export default Node;