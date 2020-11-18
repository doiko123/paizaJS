// シミュレーション (paizaランク C 相当)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const HP = Number(input)

const paizaDamagedList = [1,1]
const monsterDamagedList = [1,1]  

let count = 2
let damageSum = 2

while(damageSum < HP) {
    paizaDamagedList.push(monsterDamagedList[count - 1] + monsterDamagedList[count - 2])
    monsterDamagedList.push(paizaDamagedList[count - 1] * 2 + paizaDamagedList[count - 2])
    damageSum += monsterDamagedList[count]
    count += 1
}

console.log(count)
