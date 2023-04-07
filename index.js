// const add = require('./add')
// const sum = add(3, 2)
// console.log('sum', sum)
// console.log('from index.js')


const math = require('./p15_module_exports')
const { add, subtract } = math
console.log(add(3, 4))
console.log(subtract(2, 8))