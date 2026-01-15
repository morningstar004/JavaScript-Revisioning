const distruption = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(distruption)//{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// Object.defineProperty(Math,'PI',{
//     value: 3.141592653589793,
//     writable: true,
//     enumerable: true,
//     configurable: true
// })//Cannot redefine property: PI

// const newNum = Math.PI = 50;
// console.log(newNum);

const Owner = {
    name:'Pranjal',
    age:21,
    isActive : false,

}

console.log(Object.getOwnPropertyDescriptor(Owner,'name'));

Object.defineProperty(Owner,'name',{
    writable: false,
    enumerable: false,
    configurable: false
})

Owner.name = 'DevDeep'

console.log(Owner.name);//name will not change because we set it as false.
