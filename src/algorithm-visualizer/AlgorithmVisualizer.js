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
        this.control = 0;
        this.height = height;
        this.width = width;
        // Internal grid (1D)
        this.grid = Array.from(Array(width), () => new Array(height));

        // Creating the 2D grid
        for(let i = 0; i < width; i++) {
            for(let j = 0; j < height; j++)
                this.grid[i][j] = new Node(0, i, j, i * this.height + j);
        }
    }

    /*
     * Sets the start node.
     *
     * @param col Start node's row.
     * @param row Start node's column.
     */
    setStartNode(col, row) {
        // Start node row and column
        AlgorithmVisualizer.prototype.startNode = this.grid[col][row];
        this.grid[col][row].setStart();
        // CSS styling
        document.getElementsByClassName("square")[this.grid[col][row].pos].style.background = "rgb(43, 76, 185)";
    }

    /*
     * Sets the end node.
     *
     * @param col End node's row.
     * @param row End node's column.
     */
    setEndNode(col, row) {
        // End node row and column
        AlgorithmVisualizer.prototype.endNode = this.grid[col][row];
        this.grid[col][row].setEnd();
        // CSS styling
        document.getElementsByClassName("square")[this.grid[col][row].pos].style.background = "rgb(118, 4, 224)";
    }

    /*
     * Sets a wall node.
     *
     * @param col Wall node's row.
     * @param row Wall node's column.
     */
    setWallNode(col, row) {
        this.grid[col][row].setWall();
        // CSS styling
        document.getElementsByClassName("square")[this.grid[col][row].pos].style.background = "rgb(80, 80, 80)";
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
     * Order: [up, right, down, left].
     *
     * @param col Node's column.
     * @param row Node's row.
     * 
     * @return Array with copies of the nodes.
     */
    getNeighbours(col, row) {
        // Node not on the outline of the grid
        if (row > 0 && row < (this.height - 1) && col > 0 && col < (this.width - 1))
            return [this.grid[col][row - 1],
                    this.grid[col + 1][row],
                    this.grid[col][row + 1],
                    this.grid[col - 1][row]];

        // Node on the upper outline
        else if (row === 0) {
            if (col > 0 && col < (this.width - 1))
                return [null,
                        this.grid[col + 1][row],
                        this.grid[col][row + 1],
                        this.grid[col - 1][row]];

            else if (col === 0)
                return [null,
                        this.grid[col + 1][row],
                        this.grid[col][row + 1],
                        null];

            else if (col === this.width - 1)
                return [null,
                        null,
                        this.grid[col][row + 1],
                        this.grid[col - 1][row]];
        }

        // Node on the inferior outline
        else if (row === (this.height - 1)) {
            if (col > 0 && col < (this.width - 1))
                return [this.grid[col][row - 1],
                        this.grid[col + 1][row],
                        null,
                        this.grid[col - 1][row]];

            else if (col === 0)
                return [this.grid[col][row - 1],
                        this.grid[col + 1][row],
                        null,
                        null];

            else if (col === (this.width - 1))
                return [this.grid[col][row - 1],
                        null,
                        null,
                        this.grid[col - 1][row]];
        }

        // Node on the left outline but not on the horizontal outlines
        else if (col === 0 && row > 0 && row < (this.height - 1))
            return [this.grid[col][row - 1],
                    this.grid[col + 1][row],
                    this.grid[col][row + 1],
                    null];

        // Node on the right edge but not on the horizontal outlines
        else if (col === (this.width - 1) && row > 0 && row < (this.height - 1))
            return [this.grid[col][row - 1],
                    null,
                    this.grid[col][row + 1],
                    this.grid[col - 1][row]];
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