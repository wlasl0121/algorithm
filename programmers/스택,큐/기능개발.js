function solution(progresses, speeds) {
    var answer = [];
    var output = [];
    var cnt = 0;

    progresses.map((value, index) => {
        output.push(Math.ceil((100 - value) / speeds[index]));
    });

    while (output.length > 0) {
        cnt++;
        if (output[0] === cnt) {
            var out_cnt = 1;
            for (var i = 1; i < output.length; i++) {
                if (cnt >= output[i]) {
                    out_cnt++;
                } else if (cnt < output[i]) break;
            }
            answer.push(out_cnt);
            output = arr_pop(output, out_cnt);
        }
    }

    return answer;
}

function arr_pop(arr, size) {
    for (var i = 0; i < size; i++) {
        arr.shift();
    }
    return arr;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.log(solution([99, 99, 99, 90, 90, 90], [1, 1, 1, 1, 1, 1]));
