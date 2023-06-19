function solution(skill, skill_trees) {
    var count = 0;

    for (var i = 0; i < skill_trees.length; i++) {
        var str = skill_trees[i]
            .split("")
            .filter((e) => skill.includes(e))
            .join("");
        if (str === skill.substring(0, str.length)) {
            count++;
        }
    }

    return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
