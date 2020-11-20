// 指定された配列（リスト）の定義の中で、同じ値が存在した場合はtrueを、そうでない場合はfalseを出力してください。

const airports = ["HND", "NRT", "KIX", "NGO", "NGO"]
const set = new Set(airports)

if (airports.length !== set.size) {
    console.log(true)
} else {
    console.log(false)
}
