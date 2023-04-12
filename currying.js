//currying.js

//breking of the function of multiple argiments into mutilpe functions with
// simple arguents using closures 

let sum = function (a, b) {
    console.log(a + b)
}

sum(2, 4)

let sumcurry = function (a) {
    let add = function (b) {
        console.log(a + b)
    }

    return add

}

let summation = sumcurry(4)
summation(4)


// NULL VS UNDEFINED VS NOT DEFINED

// Undefined 
let a
console.log(a) // undefined 

let arr = [1, 2, , 3]
console.log(arr[2]) // undefined 

function test() {
    console.log('hello')
    return test
}


function add(a, b) {
    let c = a + b
    //return c
}
let x = add(2, 3)
console.log(x) // if function is not returning returns undefined 
// if return is present it will return 5


// NULL : we want to assign no value we define with null
let p = null

// not defined 
// we have not created any z variable
//console.log(z) // ReferenceError: z is not defined


// typeof operator 

let n = [1, 2, 3]

console.log(typeof n + " typr of array") // typeof n is object

let isArr = Array.isArray(n)
console.log(isArr)
