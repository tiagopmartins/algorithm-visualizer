/**
    Implementation of the DFS algorithm.
*/

/*
 * Iterative DFS algorithm.
 *
 * @param algorithmVisualizer AlgorithmVisualizer object.
 */
export async function DFS(algorithmVisualizer) {
    // Array of the node elements present in the webpage
    var squares = document.getElementsByClassName("square");
    // Color of the explored nodes
    let color = algorithmVisualizer.endNode.getExploredColor();
    // Promises made
    var promises = new Array();

    var stack = [algorithmVisualizer.startNode];
    algorithmVisualizer.startNode.setVisited(true);

    // Current node being explored
    var current = null;
    while (stack.length) {      // Stack not empty
        current = stack.pop();

        // Delay on the exploration
        promises.push(await new Promise(r => setTimeout(r, 10)));

        if (current.isEnd())
            return promises;

        if (!current.isStart() && !current.isEnd() && !current.isWall())
            squares[current.pos].style.background = color;
        
        // Next nodes to explore
        var neighbours = algorithmVisualizer.getNeighbours(current.col, current.row);

        for (let i = 0; i < neighbours.length; i++) {
            // Is a valid node, isnt a wall and isnt visited
            if (neighbours[i] !== null && neighbours[i] !== undefined &&
                !neighbours[i].isWall() && !neighbours[i].isVisited()) {
                stack.push(neighbours[i]);
                neighbours[i].previous = current;
            }
        }

        current.setVisited(true);
    }

    return promises;
}