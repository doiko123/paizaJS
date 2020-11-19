// 文字列を切り取る

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n")

const [a, b] = lines[0].split(" ").map(num => Number(num))
const str = lines[1]
const res = str.slice(a-1, b)

console.log(res)
