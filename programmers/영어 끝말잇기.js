function solution(n, words) {
    var before = words[0];
    var turn = 1;

    for (var i = 1; i < words.length; i++) {
        var player = (i % n) + 1;
        turn = parseInt(i / n) + 1;
        if (before.slice(-1) !== words[i][0]) {
            return [player, turn];
        }
        if (words.findIndex((value) => words[i] === value) !== i) {
            return [player, turn];
        }

        before = words[i];
    }

    return [0, 0];
}

console.log(
    solution(3, [
        "tank",
        "kick",
        "know",
        "wheel",
        "land",
        "dream",
        "mother",
        "robot",
        "tank",
    ])
);
console.log(
    solution(3, [
        "tank",
        "kick",
        "know",
        "wheel",
        "land",
        "dream",
        "mother",
        "robot",
        "tok",
        "kick",
    ])
);
console.log(
    solution(5, [
        "hello",
        "observe",
        "effect",
        "take",
        "either",
        "recognize",
        "encourage",
        "ensure",
        "establish",
        "hang",
        "gather",
        "refer",
        "reference",
        "estimate",
        "executive",
    ])
);
console.log(
    solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
