function solution(s) {
    var words = s.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        if (isNaN(words[i][0]) && words[i][0] !== "") {
            var x = words[i].substr(0, 1);
            var y = words[i].substr(1, words[i].length - 1);
            words[i] = x.toUpperCase() + y.toLowerCase();
        }
    }

    return words.join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
console.log(solution("a   b"));
console.log(solution("1HELLO 1WORLD"));
