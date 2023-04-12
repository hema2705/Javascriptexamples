//higherordermap.js

// map is a higher order function
// map works on arrays 
// to the map function we can pass a function which 
// operates on the indexed values and returns the results
// the results are stored in array 
const dollar = [2,3,5,6,7]
const rupees = dollar.map((n)=>
{
    return n*82.25
})

console.log(rupees)

// sqaures of the values 

const num =[1,2,3,4,5]

const squrnum = num.map((n)=>{

    return n*n
})

console.log(squrnum)


// foreach function 
const cubvalues = []

const cubefn = num.forEach((n)=>{
    console.log(n*n*n)
    cubvalues.push(n*n*n)
return n*n*n
})

 // console.log(cubefn) //  return undefined 
 // foreach will be displaying the individual values and its in the scope
 // unlike map it will not return the new array holding results 
 // we should use new aray and push reults and then retrive using console.log
  
 console.log(cubvalues) // displays the cube values
 