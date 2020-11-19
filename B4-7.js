// 指定範囲だけ大文字

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n")
const [a, b] = lines[0].split(" ").map(num => Number(num))
const str = lines[1]

const front = str.slice(0, a - 1)
const res = str.slice(a - 1, b).toUpperCase()
const back = str.slice(b)

console.log(front + res + back)
