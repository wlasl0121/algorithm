function solution(dirs) {
    var move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    var now = [0, 0];
    var route = new Set();

    for (var dir of dirs) {
        var [x, y] = [now[0] + move[dir][0], now[1] + move[dir][1]];

        if (x > 5 || y > 5 || x < -5 || y < -5) continue;

        route.add("" + now[0] + now[1] + x + y);
        route.add("" + x + y + now[0] + now[1]);

        now = [x, y];
    }

    return route.size / 2;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
