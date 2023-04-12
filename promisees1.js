//promisees1.js
// crerate a variable 
// create a new promise and it takes two functions resolve and reject 
// as a call back function 

// promise has 4 states 
// pending ,resolve , reject, fulfil

let prmise = new Promise(function(resolve,reject){

    const a =2
    const b =1
    setTimeout(()=>{
    if(a===b)
    {
       // resolve("a==b");
       resolve(()=>{console.log("a==b")});

    }
    else{
        reject("fail");
    }
    },1000
    )

});

console.log(prmise) // pending state 

prmise.then(function(result){console.log(result())})
prmise.catch(function(result){console.log(result)})
