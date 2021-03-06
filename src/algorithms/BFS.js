/**
    Implementation of the BFS algorithm.
*/

/*
 * Iterative BFS algorithm.
 *
 * @param algorithmVisualizer AlgorithmVisualizer object.
 * @param rainbowActivated Boolean.
 */
export async function BFS(algorithmVisualizer, rainbowActivated) {
    // Array of the node elements present in the webpage
    var squares = document.getElementsByClassName("square");
    // Color of the explored nodes when NOT using the rainbow mode
    const exploredColor = algorithmVisualizer.endNode.getExploredColor();
    // Rainbow colors
    const RAINBOW = algorithmVisualizer.endNode.getRainbowColors();
    // Current color index
    var colorN = 0;
    // Promises made
    var promises = new Array();

    var queue = [algorithmVisualizer.startNode];
    algorithmVisualizer.startNode.setVisited(true);

    // Current node being explored
    var current = null;
    while (queue.length) {      // Length > 0, queue not empty
        current = queue.shift();

        // Arrived at the end node
        if (current.isEnd())
            return promises;

        if (!current.isStart() && !current.isEnd() && !current.isWall()) {
            if (rainbowActivated) {
                squares[current.pos].style.background = RAINBOW[current.rainbowColorN];
                colorN = (colorN + 1) % RAINBOW.length;
            }

            else
                squares[current.pos].style.background = exploredColor;
        }

        // Next nodes to explore
        var neighbours = algorithmVisualizer.getNeighbours(current.col, current.row);

        for (let i = 0; i < neighbours.length; i++) {
            // Is a valid node, isnt a wall and isnt visited
            if (neighbours[i] !== null && neighbours[i] !== undefined &&
                !neighbours[i].isWall() && !neighbours[i].isVisited()) {
                queue.push(neighbours[i]);
                neighbours[i].setVisited(true);
                neighbours[i].previous = current;
                neighbours[i].rainbowColorN = (current.rainbowColorN + 1) % RAINBOW.length;

                // Delay on the exploration
                promises.push(await new Promise(r => setTimeout(r, 10)));
            }
        }

        current.setVisited(true);
    }

    // End node not found
    return promises;
}