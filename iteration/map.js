const Num = [1,2,3,4,5,6,7,8,9]

const newNum = Num.map((num) => num+5)
console.log(newNum)


// chaning 

const calVal = Num.map((num) => num * 10).map((num) => num+4).filter((num) => num>30)

console.log(calVal)
