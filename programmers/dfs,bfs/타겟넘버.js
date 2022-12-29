function solution(numbers, target) {
    var answer = 0;
    var str = [];

    function dfs(node, sum) {
        if (numbers.length === node) {
            console.log(str);
            console.log(node);
            //length : 5
            //depth가 최하층일때
            if (sum === target) {
                answer++;
            }
            return;
        }

        // 기본으로 더해주고
        // str = str.concat(node, " + ");
        str.push(`${node} + `);
        console.log("push, " + node);
        dfs(node + 1, sum + numbers[node]);

        // // 최하층에 도달한 이후에 실행될 재귀함수, sum에서 - 해준다
        // str = str.concat(node, " - ");
        str.pop();
        console.log("pop, " + node);
        dfs(node + 1, sum - numbers[node]);
    }
    dfs(0, 0); //0번째부터 시작

    // console.log(answer);
    return answer;
}

solution([1, 1, 1, 1, 1], 3); // return : 5
// solution([4, 1, 2, 1], 4); // return : 2
