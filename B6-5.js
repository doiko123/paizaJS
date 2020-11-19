// 与えられた文字列sの n 文字目と n + 1 文字目を半角スペース区切りで出力
// sの中にn + 1文字目が存在しなければ何も出力しない

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n")
const n = Number(lines[0])
const s = lines[1]

if (s[n]) {
    console.log(`${s[n-1]} ${s[n]}`)
}
