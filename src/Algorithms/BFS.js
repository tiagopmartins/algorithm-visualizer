/**
    Implementation of the BFS algorithm.
*/

/*
 * Iterative BFS algorithm.
 *
 * @param algorithmVisualizer AlgorithmVisualizer object.
 */
function BFS(algorithmVisualizer) {
    // Reseting the visited flag on every node
    algorithmVisualizer.resetVisitedFlag();

    // Array of the node elements present in the webpage
    var webpageNodes = document.getElementsByClassName("square");

    var queue = [algorithmVisualizer.grid.getStartNode()];
    
    // Current node being explored
    var current = null;
    while (queue.length) {      // Length > 0, queue not empty
        current = queue.shift();

        // Arrived at the end node
        if (current.isEnd())
            return true;

        webpageNodes[current.pos].style.color = current.getExploredColor();

        // Next nodes to explore
        var neighbours = algorithmVisualizer.getNeighbours(current.row, current.col);
        for (let i = 0; i < neighbours.length; i++) {
            if (!neighbours[i].isWall() && !neighbours[i].isVisited())
                queue.push(neighbours[i]);
        }

        current.setVisited(true);
    }

    // End node not found
    return false;
}