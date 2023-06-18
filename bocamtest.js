function solution(arr) {
    var answer = [];
    var nums = new Array(101).fill(0);
    arr.sort((a, b) => a - b);

    for (var i = 0; i < arr.length; i++) {
        nums[arr[i]] += 1;
    }

    nums.map((v) => {
        if (v > 1) {
            answer.push(v);
        }
    });

    if (answer.length <= 0) {
        answer.push(-1);
    }

    return answer;
}
console.log(solution([1, 2, 3, 3, 3, 3, 4, 4]));
console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));
console.log(solution([3, 5, 7, 9, 1]));
