//pureimpurefunctions.js

// below is example of impure function 
// for the same input when the result is different 
// in below example the result is depeneded on varying value of a
let a = 10
let add = (x)=>{
console.log(x+a)
a++
}

add(9) //  result = 19
add(9) //  result = 20
add(9) //  result = 21
add(9) //  result = 22


// example of purefunction

let purefunc = (a,b)=>
{
    console.log(a+b)
}

purefunc(2,3) // result = 5
purefunc(2,3) // result = 5
purefunc(2,3) // result = 5
// in the above pure function console is used to print o external
// resource terminal , this is making kinf of function impure 
// so the function just has to do what it has to it is called as side effect

let perfectpurefunc = (a,b)=>
{
return a+b
}

console.log(perfectpurefunc(2,3)) // result = 5
console.log(perfectpurefunc(2,3)) // result = 5
console.log(perfectpurefunc(2,3)) // result = 5

