/**
    Implementation of the A* algorithm.
*/

/*
 * A* algorithm.
 *
 * @param algorithmVisualizer AlgorithmVisualizer object.
 */
export async function a_star(algorithmVisualizer) {

    /*
     * Returns the node with the lowest f value in the open list
     * and removes it from the list passed.
     *
     * @param list List to search on.
     * 
     * @return Null/Node.
     */
    function lowestFNode(list) {
        if (list.length == 0)
            return null;
        
        var min = list[0];
        var minIndex = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].f_value < min.f_value) {
                min = list[i];
                minIndex = i;
                
                if (min == 0) {
                    list.splice(minIndex, 1);   // Removes the element from the list
                    return min;
                }
            }
        }

        list.splice(minIndex, 1);   // Removes the element from the list
        return min;
    }

    /*
     * Calculates the Manhattan distance (heuristic) of a node to the end node.
     *
     * @param node Node to calculate the distance of.
     * 
     * @return Manhattan distance.
     */
    function manhattanDistance(node) {
        node.h_value = Math.abs(node.row - algorithmVisualizer.endNode.row) +
                       Math.abs(node.col - algorithmVisualizer.endNode.col);
    }

    /*
     * Tells if a node is inside the list given.
     *
     * @param node Node to check.
     * @param list List to check.
     * 
     * @return Boolean.
     */
    function isInsideList(node ,list) {
        for (let i = 0; i < list.length; i++) {
            if (node === list[i])
                return true;
        }

        return false;
    }

    /*
     * Removes a node from inside the list given.
     *
     * @param node Node to check.
     * @param list List to check.
     */
    function removeFromList(node, list) {
        for (let i = 0; i < list.length; i++) {
            if (node === list[i])
                list.splice(i, 1);
        }
    }

    // Distance between nodes
    const DIST = 1;
    // Array of the node elements present in the webpage
    var squares = document.getElementsByClassName("square");
    // Color of the explored nodes
    let color = algorithmVisualizer.endNode.getExploredColor();
    // Promises made
    var promises = new Array();
    // List of nodes to visit
    var openList = [algorithmVisualizer.startNode];
    // List of the nodes already visited
    var closedList = [];

    // Current node being explored
    var current = null;
    while (openList.length > 0) {        // There are still nodes to visit
        current = lowestFNode(openList);
        closedList.push(current);

        // Delay on the exploration
        promises.push(await new Promise(r => setTimeout(r, 10)));

        if (current.isEnd())
            return promises;

        if (!current.isStart() && !current.isEnd() && !current.isWall())
            squares[current.pos].style.background = color;
        
        // Next nodes to explore
        var neighbours = algorithmVisualizer.getNeighbours(current.col, current.row);

        for (let i = 0; i < neighbours.length; i++) {
            if (neighbours[i] !== null && neighbours[i] !== undefined && !neighbours[i].isWall()) {
                manhattanDistance(neighbours[i]);
                
                // New lower g_value for the neighbour in the open list
                if (current.g_value + DIST < neighbours[i].g_value && isInsideList(neighbours[i], openList))
                    removeFromList(neighbours[i], openList);

                // Neighbour in the closed list, but new lower distance discovered
                if (current.g_value + DIST < neighbours[i].g_value && isInsideList(neighbours[i], closedList))
                    removeFromList(neighbours[i], closedList);

                if (!isInsideList(neighbours[i], openList) && !isInsideList(neighbours[i], closedList)) {
                    neighbours[i].g_value = current.g_value + DIST;
                    neighbours[i].f_value = neighbours[i].g_value + neighbours[i].h_value;
                    neighbours[i].previous = current;
                    openList.push(neighbours[i]);
                }
            }
        }
    }

    return promises;
}