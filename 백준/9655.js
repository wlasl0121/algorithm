let n = Number(
    require("fs").readFileSync("백준/input.txt").toString().trim().split("\n")
);
if (n % 2 === 0) {
    console.log("CY");
} else {
    console.log("SK");
}
