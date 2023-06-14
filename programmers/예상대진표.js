function solution(n, a, b) {
    var answer = 0;

    var me = a;
    var he = b;
    var count = 0;
    while (true) {
        count++;
        if (me % 2 === 0 && me - 1 === he) break;
        else if (me % 2 === 1 && me + 1 === he) break;
        me = Math.ceil(me / 2);
        he = Math.ceil(he / 2);
    }
    answer = count;

    return answer;
}

console.log(solution(8, 4, 7));
