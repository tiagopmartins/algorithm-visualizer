/**
    Internal representation of the algorithm visualizer grid.
*/

import Node from "./Node"

// Internal representation of the algorithm visualizer.
class AlgorithmVisualizer {
    /*
     * Constructor.
     *
     * @param height Grid's height.
     * @param width Grid's width.
     */
    constructor(height, width) {
        this.height = height;
        this.width = width;
        // Start node row and column
        this.startNode = [];
        // End node row and column
        this.endNode = [];
        // Internal grid (1D)
        this.grid = Array.from(Array(width), () => new Array(height));

        // Creating the 2D grid
        for(let i = 0; i < width; i++) {
            for(let j = 0; j < height; j++)
                this.grid[i][j] = new Node(0, i, j, i * this.height + j);
        }
    }

    // Getters

    get getStartNode() {
        return this.startNode;
    }

    get getEndNode() {
        return this.endNode;
    }

    /*
     * Sets the start node.
     *
     * @param row Start node's row.
     * @param col Start node's column.
     */
    setStartNode(row, col) {
        this.startNode = this.grid[row][col];
        this.grid[row][col].setStart();
        document.getElementsByClassName("square")[this.grid[row][col].pos].style.background = "rgb(43, 76, 185)";
    }

    /*
     * Sets the end node.
     *
     * @param row End node's row.
     * @param col End node's column.
     */
    setEndNode(row, col) {
        this.endNode = this.grid[row][col];
        this.grid[row][col].setEnd();
        document.getElementsByClassName("square")[this.grid[row][col].pos].style.background = "rgb(118, 4, 224)";
    }

    /*
     * Sets a wall node.
     *
     * @param row Wall node's row.
     * @param col Wall node's column.
     */
    setWallNode(row, col) {
        this.grid[row][col].setWall();
        document.getElementsByClassName("square")[this.grid[row][col].pos].style.background = "rgb(80, 80, 80)";
    }

    /*
     * Resets every node present in the grid.
     */
    clearGrid() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++)
                this.grid[i][j].reset();
        }
    }

    /*
     * Gets the adjacent nodes of a given node.
     * Order: [left, up, right, down].
     *
     * @param row Node's row.
     * @param col Node's column.
     * 
     * @return Array with copies of the nodes.
     */
    getNeighbours(row, col) {
        // Node not on the outline of the grid
        if (row > 0 && row < this.height && col > 0 && col < this.width)
            return [this.grid[row][col - 1],
                    this.grid[row - 1][col],
                    this.grid[row][col + 1],
                    this.grid[row + 1][col]];

        // Node on the upper outline
        else if (row === 0) {
            if (col > 0 && col < this.width)
                return [this.grid[row][col - 1],
                        null,
                        this.grid[row][col + 1],
                        this.grid[row + 1][col]];

            else if (col === 0)
                return [null,
                        null,
                        this.grid[row][col + 1],
                        this.grid[row + 1][col]];

            else if (col === this.width - 1)
                return [this.grid[row][col - 1],
                        null,
                        null,
                        this.grid[row + 1][col]];
        }

        // Node on the inferior outline
        else if (row === this.height - 1) {
            if (col > 0 && col < this.width)
                return [this.grid[row][col - 1],
                        this.grid[row - 1][col],
                        this.grid[row][col + 1],
                        null];

            else if (col === 0)
                return [null,
                        this.grid[row - 1][col],
                        this.grid[row][col + 1],
                        null];

            else if (col === this.width - 1)
                return [this.grid[row][col - 1],
                        this.grid[row - 1][col],
                        null,
                        null];
        }

        // Node on the left outline but not on the horizontal outlines
        else if (col === 0 && row > 0 && row < this.height)
            return [null,
                    this.grid[row - 1][col],
                    this.grid[row][col + 1],
                    this.grid[row + 1][col]];

        // Node on the right edge but not on the horizontal outlines
        else if (col === this.width - 1 && row > 0 && row < this.height)
            return [this.grid[row][col - 1],
                    this.grid[row - 1][col],
                    null,
                    this.grid[row + 1][col]];
    }

    // Resets the visited flag on every node.
    resetVisitedFlag() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++)
                this.grid[i][j].setVisited(false);
        }
    }
}

export default AlgorithmVisualizer;