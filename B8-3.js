// 指定された配列（リスト）の定義の中で、同じ要素の数をカウントして、その数を出力してください。
// 2つ以上同じ要素が出現するのは、1種類の文字列についてだけです。

const airports = ["HND", "NRT", "KIX", "NGO", "NGO", "NGO", "NGO", "NGO"]
const s = new Set(airports)
const res = airports.length - s.size + 1

console.log(res)
