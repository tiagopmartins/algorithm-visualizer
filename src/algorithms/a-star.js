/**
    Implementation of the A* algorithm.
*/

/*
 * A* algorithm.
 *
 * @param algorithmVisualizer AlgorithmVisualizer object.
 */
export async function a_star(algorithmVisualizer) {
    // Reseting the visited flag on every node
    algorithmVisualizer.resetVisitedFlag();

    // Array of the node elements present in the webpage
    var squares = document.getElementsByClassName("square");
}