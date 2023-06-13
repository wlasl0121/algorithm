function solution(lottos, win_nums) {
    var answer = [];
    var min = numFilter(lottos, win_nums);
    var max = min;
    var rank = [6, 5, 4, 3, 2];
    lottos.map((v) => {
        if (v === 0) {
            max += 1;
        }
    });
    answer = checkRank([max, min], rank);
    return answer;
}

function numFilter(lottos, win_nums) {
    lottos.map((v) => {
        var result = win_nums.findIndex((data) => {
            return data === v;
        });
        if (result > -1) {
            win_nums[result] = -1;
        }
    });
    var count = 0;
    win_nums.map((v) => {
        if (v === -1) count++;
    });
    return count;
}
function checkRank(arr, rank) {
    var answer = [];

    arr.map((v) => {
        var r = rank.findIndex((num) => {
            return num === v;
        });
        if (r !== -1 && r < 5) answer.push(r + 1);
        else if (r === -1) answer.push(6);
    });

    return answer;
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
