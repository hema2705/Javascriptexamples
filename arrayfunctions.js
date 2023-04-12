//arrayfunctions.js

const integersvalues = [ -100 , -8 , 0 , 50 ,60 ,990]
// find

let findfn =integersvalues.find((n)=>{
    return n>0
})
// this results in first value satisfying the condition
console.log("find:",findfn) // result is 5

// findindex 

let findindex = integersvalues.findIndex((n)=>{
    return n > 5
})
console.log("find index",findindex)

// some function 

let somefn = integersvalues.some((n)=>{
    return n>0
})
console.log("Some Function:",somefn) // some method returns the boolean value 
// if condtion  satisfies  atleast one element in the array

// every function 

let everyfn = integersvalues.every((n)=>{
    return n%10 == 0
})

console.log("every function", everyfn)


