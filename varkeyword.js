//varkeyword.js

//redeclaration is allowed 
var a = 3
console.log(a)
var a = 4
console.log(a)

// there is no block scope for var keyword 

if(a===4)
{
   var b=7
    console.log(b)
}
console.log(b)

// function scope  is defined 

function test()
{
    var c = 10
    console.log(c)
}

test()
var c =9
console.log(c)

// hence from the above for a var keyword there is only the 
// function scope for the var variable 
// it can be redeclared and has no block scope no security 
