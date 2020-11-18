// シミュレーションの練習 (paizaランク C 相当)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n")

const n = Number(lines[0])
const[a, b] = lines[1].split(" ").map(num => Number(num))

let paiza = 1
let kyoko = 1
let count = 0

while (kyoko <= n) {
    kyoko += paiza * a;
    paiza += kyoko % b;
    count += 1
}

console.log(count)
