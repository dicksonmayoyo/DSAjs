// Example of Data Structures and Algorithms (DSA) in JavaScript

// Graph Representation using Adjacency List
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // Comment this line for a directed graph
    }

    // Perform Depth First Search (DFS)
    dfs(start) {
        const visited = new Set();
        const result = [];

        const dfsHelper = (vertex) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(start);
        return result;
    }

    // Perform Breadth First Search (BFS)
    bfs(start) {
        const visited = new Set();
        const queue = [start];
        const result = [];

        visited.add(start);

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

// Example usage
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

console.log("DFS Traversal:", graph.dfs('A')); // Output: DFS Traversal: [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log("BFS Traversal:", graph.bfs('A')); // Output: BFS Traversal: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
