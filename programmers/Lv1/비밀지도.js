function solution(n, arr1, arr2) {
    var answer = [];

    answer = arr1.reduce((arr, cur, idx) => {
        arr.push((cur | arr2[idx]).toString(2).padStart(n, "0"));
        return arr;
    }, []);

    answer = answer.reduce((arr, cur, _) => {
        arr.push(cur.replaceAll("0", " ").replaceAll("1", "#"));
        return arr;
    }, []);

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
