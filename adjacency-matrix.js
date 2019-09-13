let graph = [];

addEdge = (vertices) => {
    let vertex1 = vertices[0];
    let vertex2 = vertices[1];

    if (graph[vertex1] == null){
        graph[vertex1] = [];
        graph[vertex1].push(vertex1);
    }
    if (graph[vertex2] == null){
        graph[vertex2] = [];
        graph[vertex2].push(vertex2);
    }
    graph[vertex1].push(vertex2);
    graph[vertex2].push(vertex1);
}

printGraph = (input) => {
    
    let numEdges = input[0][1];

    for (let i = 0; i < numEdges; i++){
        addEdge(input[i+1]);
    }

    console.log(graph);
}

printGraph([
    [5,7],
    [0,1],
    [0,4],
    [1,2],
    [1,3],
    [1,4],
    [2,3],
    [3,4],
    [3,3],
    [0,1],
    [1,2],
    [2,0]
]);