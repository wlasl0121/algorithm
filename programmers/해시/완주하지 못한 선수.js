function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();

    //undefined를 생각하지 못해서 나온 결과
    // 첫번째 버전
    // for (var i = 0; i < completion.length; i++) {
    //     if (participant[i] !== completion[i]) {
    //         answer = participant[i];
    //         break;
    //     }
    // }

    // return answer === "" ? participant[participant.length - 1] : answer;

    //undefined가 된다...
    //두번째 버전
    for (var i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) return participant[i];
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
    solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
    )
);
console.log(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
