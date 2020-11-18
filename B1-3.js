// 配列（リスト）要素の合計

const list = [1, 3, 5, 6, 3, 2, 5, 23, 2]

const sum = list.reduce((num1, num2) => {
    return num1 + num2
})

console.log(sum)
