/**
    Implementation of the DFS algorithm.
*/

/*
 * Iterative DFS algorithm.
 *
 * @param algorithmVisualizer AlgorithmVisualizer object.
 */
export async function DFS(algorithmVisualizer) {
    // Reseting the visited flag on every node
    algorithmVisualizer.resetVisitedFlag();

    // Array of the node elements present in the webpage
    var squares = document.getElementsByClassName("square");

    var queue = [algorithmVisualizer.startNode];
    algorithmVisualizer.startNode.setVisited(true);
}