let arr = new Array(10001).fill(0);

for (let i = 1; i <= 10000; i++) {
    let dn = i + numToStr(i);
    arr[dn] += 1;
}

for (let i = 1; i <= 10000; i++) {
    if (arr[i] > 0) continue;
    else console.log(i);
}

function numToStr(i) {
    let str = i.toString();
    let sum = 0;
    for (let j = 0; j < str.length; j++) {
        sum += Number(str[j]);
    }

    return sum;
}
