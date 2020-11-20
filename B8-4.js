// 指定した配列を定義し、配列の要素を昇順に並び替えて、全て出力してください。

const numbers = [1, 3, 5, 6, 3, 2, 5, 23, 2]

numbers.sort((a, b) => {
    return a - b
})

numbers.forEach(num => {
    console.log(num)
})
