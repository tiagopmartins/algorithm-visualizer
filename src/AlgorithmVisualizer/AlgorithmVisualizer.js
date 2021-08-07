/*
 * Internal representation of the algorithm visualizer grid.
 */

import Node from "./Node"

// Internal representation of the algorithm visualizer.
class AlgorithmVisualizer {
    constructor(height, width) {
        // Internal grid (1D)
        this.grid = Array.from(Array(width), () => new Array(height));

        // Creating the 2D grid
        for(let i = 0; i < width; i++) {
            for(let j = 0; j < height; j++)
                this.grid[i][j] = new Node(0, i, j);
        }
    }
}

export default AlgorithmVisualizer;