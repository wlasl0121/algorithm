function solution(numbers, target) {
    var answer = 0;

    function dfs(node, sum) {
        if (numbers.length === node) {
            if (sum === target) {
                answer++;
            }
            return;
        }

        dfs(node + 1, sum + numbers[node]);
        dfs(node + 1, sum - numbers[node]);
    }
    dfs(0, 0);

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
