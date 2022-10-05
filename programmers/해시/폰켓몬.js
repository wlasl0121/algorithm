function solution(nums) {
    var answer = 0;

    const arr = new Set(nums);
    const unique = [...arr];
    const cnt = nums.length / 2;
    answer = unique.length;

    return answer > cnt ? cnt : answer;
}
