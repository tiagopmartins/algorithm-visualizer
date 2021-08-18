/**
    Implementation of the BFS algorithm.
*/

/*
 * Iterative BFS algorithm.
 *
 * @param algorithmVisualizer AlgorithmVisualizer object.
 */
export async function BFS(algorithmVisualizer) {
    // Array of the node elements present in the webpage
    var squares = document.getElementsByClassName("square");

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

        if (!current.isStart() && !current.isEnd() && !current.isWall())
            squares[current.pos].style.background = current.getExploredColor();

        // Next nodes to explore
        var neighbours = algorithmVisualizer.getNeighbours(current.col, current.row);

        for (let i = 0; i < neighbours.length; i++) {
            // Is a valid node, isnt a wall and isnt visited
            if (neighbours[i] !== null && neighbours[i] !== undefined &&
                !neighbours[i].isWall() && !neighbours[i].isVisited()) {
                queue.push(neighbours[i]);
                neighbours[i].setVisited(true);

                // Delay on the exploration
                promises.push(await new Promise(r => setTimeout(r, 10)));
            }
        }
    }

    // End node not found
    return promises;
}