function solution(fees, records) {
    var answer = [];
    //fees = [기본시간,기본요금,단위시간,단위요금]
    //records = [시각,번호,내역]
    var record = records.map((v) => {
        return v.split(" ");
    });
    // console.log(record);
    var carNums = record.map((v) => {
        return v[1];
    });

    carNums = carNums
        .filter((v, idx) => carNums.indexOf(v) === idx)
        .sort((a, b) => Number(a) - Number(b));

    // console.log(carNums);

    carNums.map((v) => {
        answer.push(feeCal(fees, history(v, record)));
    });

    return answer;
}

function feeCal(fees, m) {
    var money = 0;
    if (m > fees[0]) {
        money = fees[1] + Math.ceil((m - fees[0]) / fees[2]) * fees[3];
    } else if (m <= fees[0]) {
        money = fees[1];
    }
    return money;
}

function history(num, records) {
    //num='0000' records=[...] => '0000'includs list
    var arr = [];
    records.map((v) => {
        if (v[1] === num) arr.push(v);
    });
    // console.log(arr);
    var time = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i][2] === "IN" && arr[i + 1][2]) {
            time += Number(timeCal(arr[i][0], arr[i + 1][0]));
        }
    }
    if (arr[arr.length - 1][2] === "IN") {
        time += Number(timeCal(arr[arr.length - 1][0], "23:59"));
    }
    return time;
}

function timeCal(i, j) {
    i += ":00";
    j += ":00";
    var start = new Date(`2000/2/2 ${i}`);
    var end = new Date(`2000/2/2 ${j}`);
    var diffSec = end.getTime() - start.getTime();
    var m = diffSec / (60 * 1000);
    return `${m}`;
}

console.log(
    solution(
        [180, 5000, 10, 600],
        [
            "05:34 5961 IN",
            "06:00 0000 IN",
            "06:34 0000 OUT",
            "07:59 5961 OUT",
            "07:59 0148 IN",
            "18:59 0000 IN",
            "19:09 0148 OUT",
            "22:59 5961 IN",
            "23:00 5961 OUT",
        ]
    )
);
console.log(
    solution(
        [120, 0, 60, 591],
        [
            "16:00 3961 IN",
            "16:00 0202 IN",
            "18:00 3961 OUT",
            "18:00 0202 OUT",
            "23:58 3961 IN",
        ]
    )
);
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
