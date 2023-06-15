function solution(N, road, K) {
    var answer = 0;

    var graph = makeMap(N, road);
    var dij = dijkstra(graph, N);

    for (let i = 0; i < dij.length; i++) {
        if (dij[i] <= K) {
            answer += 1;
        }
    }

    return answer;
}

function dijkstra(graph, N) {
    var delivery = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    var queue = [];
    queue.push([1, 0]);
    delivery[1] = 0;

    while (queue.length > 0) {
        var [b, time] = queue.shift();
        for (var i = 0; i < graph[b].length; i++) {
            var [delB, timeB] = graph[b][i];
            if (delivery[delB] > delivery[b] + timeB) {
                delivery[delB] = delivery[b] + timeB;
                queue.push([delB, timeB]);
            }
        }
    }
    return delivery;
}

function makeMap(N, road) {
    var graph = Array.from(new Array(N + 1), () => Array().fill(0));
    road.map((v) => {
        var [a, b, time] = v;
        graph[a].push([b, time]);
        graph[b].push([a, time]);
    });
    return graph;
}

console.log(
    solution(
        5,
        [
            [1, 2, 1],
            [2, 3, 3],
            [5, 2, 2],
            [1, 4, 2],
            [5, 3, 1],
            [5, 4, 2],
        ],
        3
    )
);
console.log(
    solution(
        6,
        [
            [1, 2, 1],
            [1, 3, 2],
            [2, 3, 2],
            [3, 4, 3],
            [3, 5, 2],
            [3, 5, 3],
            [5, 6, 1],
        ],
        4
    )
);
