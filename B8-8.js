// 1行目に行数を表す整数 n、続く n 行の各行で「文字」と「整数」の組が空白区切りで入力されます。
// n 個の組について、「文字」の値が同じ組同士の数値を足しわせてまとめ、まとめた数値の降順で、文字とまとめた数値の組を出力してください。

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n")
const num = Number(lines[0])
const arr = []

// 空の配列に文字と整数の組み合わせ全てを追加
for (let i = 1; i <= num; i++) {
    const pairs = lines[i].split(" ")
    arr.push([pairs[0], Number(pairs[1])])
}

// 計算用に空のMapオブジェクトを生成
const counts = new Map()

// 配列をループし、Mapオブジェクトに文字と整数の組み合わせを追加
// すでにkeyである文字が存在する場合は元のvalueを更新（整数をプラスする）
arr.forEach(pairs => {
    if (counts.get(pairs[0])) {
        counts.set(pairs[0], counts.get(pairs[0]) + pairs[1])
    } else {
        counts.set(pairs[0], pairs[1])
    }
})

// Mapオブジェクトを配列に変換し、整数の値で降順ソート
const newArr = Array.from(counts)
newArr.sort((a, b) => {
    return b[1] - a[1]
})

// ソート後の配列の値をループで出力
newArr.forEach(item => {
  console.log(`${item[0]} ${item[1]}`)
})
