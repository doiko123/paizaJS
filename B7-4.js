// 1行目に行数を表す整数 n、続く n 行の各行で「文字」と「整数」の組が空白区切りで入力されます。
// n 個の組を、「整数」の値で昇順に並べ変え、「文字」を出力してください。

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n")
const num = Number(lines[0])
const arr = []

for (let i = 1; i <= num ; i++) {
    let pair = lines[i].split(" ")
    arr.push([pair[0], Number(pair[1])])
}

arr.sort((a, b) => {
    return a[1] - b[1]
})

arr.forEach(item => {
    console.log(item[0])
})
