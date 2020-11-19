// 文字の重複カウント

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

const lines = input.split("\n")
const a = lines[0]
const arr = lines[1].split("")

const newArr = arr.filter(str => {
   return str ==  a
})

console.log(newArr.length)
