// 配列（リスト）データの足し合わせ

const arr = [4, 0, 5, -1, 3, 10, 6, -8]

const newArr = arr.filter(num =>{
    return num >= 5
})

const res = newArr.reduce((num1, num2) => {
    return num1 + num2
})

// これでも解ける（上の方が好き）
// let res = 0
// arr.forEach((num)=>{
//     if (num >= 5) {
//         res += num
//     }
// })


console.log(res)
