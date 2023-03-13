let input = require("fs")
    .readFileSync("./백준/input.txt")
    .toString()
    .trim()
    .split("\n");
let N = Number(input.shift());

let arr = input.sort((a, b) => {
    if (a.length === b.length) {
        return a.localeCompare(b);
    } else {
        return a.length - b.length;
    }
});
console.log([...new Set(arr)].join("\n"));

require("fs").writeFileSync(
    "./백준/output.txt",
    JSON.stringify([...new Set(arr)])
);
