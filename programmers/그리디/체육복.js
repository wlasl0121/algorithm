function solution(n, lost, reserve) {
    lost.sort((a, b) => {
        return a - b;
    });
    reserve.sort((a, b) => {
        return a - b;
    });
    // 정렬해줘야 [4,2], [3,5] 같은 케이스에 문제가 생기지 않음

    reserve_set = reserve.filter((x) => !lost.includes(x));
    lost_set = lost.filter((x) => !reserve.includes(x));
    //중복을 제거 해줘야 최댓값 뽑는 것에 문제가 안생김

    reserve_set.map((value) => {
        for (var i = 0; i < lost_set.length; i++) {
            if (lost_set[i] - value >= -1 && lost_set[i] - value <= 1) {
                lost_set.splice(i, 1);
                i--; // 반복문 안에서 splice를 해줬기 때문에 i-- 를 해줘야 에러가 안난다.
                break;
            }
        }
    });

    return n - lost_set.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [4, 2], [3, 5]));
console.log(
    solution(13, [1, 2, 5, 6, 10, 12, 13], [2, 3, 4, 5, 7, 8, 9, 10, 11, 12])
);
