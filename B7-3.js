// 1行目で整数 n が与えられ、2行目で n 個の整数が与えられます。
// n 個の整数を昇順で出力してください。

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n")
const num = Number(lines[0])
const arr = lines[1].split(" ").map(n => Number(n))

arr.sort((a, b)=> {
    return a - b
})

arr.forEach(n => {
  console.log(n)  
})
