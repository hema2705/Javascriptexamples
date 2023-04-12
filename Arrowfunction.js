//Arrowfunction.js

function f1()
{
    console.log("function")
}

function f2(a) {
    console.log(a)
    return a
}

function f3(a,b) {
 console.log(a)
 console.log(b)
 return a+b

}


f1
f2(1)
f3(1,2)

// other form of functions signature 

let m1 = function()
{
    console.log("method 1")
}

let m2 = function(a)
{
    console.log(a)
    console.log("method2")

}

let m3 = function(a,b)
{
    console.log(a+b)
    console.log("method3")

}

m1()
m2(3)
m3(3,6)

// defining functions with arrows

let arrowf1 = ()=>{
    console.log("arrowf1")
}

let arrowf2 = (a)=>
{
    console.log("arrow function 2 :"+ a)
}

let arrowf3 = (a,b)=>{
    console.log("arrow f3 sum :" + a+b)
}

arrowf1()
arrowf2(2)
arrowf3(1,2)