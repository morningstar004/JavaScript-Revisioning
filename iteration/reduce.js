const currl = [1,2,3]

const newVal = currl.reduce((acc,cur) => {
    console.log(`acc: ${acc} and cur: ${cur}`)
    return acc+cur
},0)//initally acc = 0;then we add 1,and then 2 
console.log(newVal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    console.log(`acc: ${acc} and item's price: ${item.price}`)
    return acc + item.price
}, 0)

console.log(priceToPay);
                         // acc: 0 and item.price: 2999
                         // acc: 2999 and item.price: 999
                         // acc: 3998 and item.price: 5999                         
                         // acc: 9997 and item.price: 12999
                         // 22996