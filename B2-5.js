// 足すか掛けるか

// スペース区切りの2つの整数がn行与えられるので、2つの整数をそれぞれ足し合わせて
// さらに、その結果をすべての行について足し合わせて出力
// ただし、2つの整数が同じだった場合は、2つの整数を掛け合わせてから、その結果を足し合わせる

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

const lines = input.split("\n")
const num = Number(lines[0])
let res = 0

for (let i = 1; i <= num; i ++) {
    const [a, b] = lines[i].split(" ").map(n => Number(n))
    if (a === b) {
        res += a * b
    } else {
        res += a + b
    }
}

console.log(res)
