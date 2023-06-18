function solution(nums) {
    var answer = -1;

    nums.sort((a, b) => a - b);
    answer = findNum(pick(nums));

    return answer;
}

function findNum(arr) {
    var sum = [];
    var sosu = 0;
    for (var i = 0; i < arr.length; i++) {
        sum.push(
            arr[i].reduce((acc, cur, _) => {
                return (acc += cur);
            }, 0)
        );
    }

    sum.map((v) => {
        if (v === 1) return;

        for (var i = 2; i < v; i++) {
            if (v % i === 0) return;
        }
        sosu += 1;
    });

    return sosu;
}
function pick(nums) {
    var pickArr = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var l = j + 1; l < nums.length; l++) {
                pickArr.push([nums[i], nums[j], nums[l]]);
            }
        }
    }
    return pickArr;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
