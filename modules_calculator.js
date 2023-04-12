//modules_calculator.js
function add(a,b)
{
    const s = a+b
    console.log(`sum of numbers is ${s}`)
}
let sub = (a,b)=>{
    let s = a-b
    console.log(`sub of a and b is ${s}`)
}

//sub(9,7)

let mul = (a,b)=>{
    let mul = a*b
    console.log(`multipliction is ${mul}`)
}
//mul(2,1)

let div = (a,b)=>
{
    let d = a/b
    console.log(`division is ${d}`)
}
//div(9,2)

module.exports = {
    addition:add,
    substraction:sub
    
}