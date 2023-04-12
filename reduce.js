//reduce.js
// reduce returns one value 
// we can perform the operations of elements in an array 
// which results in single result , this can be acheived 
// using reduce function 
// reduce takes two args 1.storing the result 2.the array values

const num = [1,2,3,4,5]
const sumfn_reduce = num.reduce((rs , num)=>{
   var rs = rs+num
   console.log("*")
    return rs
},0)
console.log(sumfn_reduce)
// reduce method works as below 
// we should pass the function and initial value 
// for each iteration of the value in array the accumated value 
// will be updated until it reaches the end of array 

let sum = 0;
let arr = [10,15,20,30];  
arr.forEach(function myFunction(element) {  sum = sum + element;  });  
console.log(sum);