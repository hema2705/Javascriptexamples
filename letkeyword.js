//letkeyword.js
// reassign the let variable
var a = 10
var a = 30

let b = 20
// let b = 30  -> redeclaration not allowed

// let key word is block scoped
if(b===20)
{
    let c= 30
    console.log(c)
}

//console.log(c)

// function scope 

function f1()
{
    let x =0
    x = 9
    console.log(x)
}

f1()
//console.log(x)

const y =9
// const y =7 cannot redeclrae 
// y=8  cannot reassign
console.log(y) 