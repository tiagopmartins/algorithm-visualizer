/**
    Implementation of the Bellman-Ford method.
*/

/*
 * Bellman-Ford method.
 *
 * @param algorithmVisualizer AlgorithmVisualizer object.
 */
export async function bellman_ford(algorithmVisualizer) {
    // Reseting the visited flag on every node
    algorithmVisualizer.resetVisitedFlag();

    // Array of the node elements present in the webpage
    var squares = document.getElementsByClassName("square");
}