//settimeoutasyncfunction.js
// setTimeout(() => {
    
// }, timeout);
// this is an async function we can give the timeout for which the 
// callback function will wait and then execute the code 

//setTimeout(cb,5000)

function print()
{
    console.log("set time out")
}
console.log("print first")
//setTimeout(print,5000)
console.log("print last")

// Result is 
// print first
// print last
// set time out = prints after 5 sec 


function interval()
{
    console.log("set interval")
}

let tim = setInterval(interval, 1000); // this will call the interval for every 1sec
// for infinite loop 

// to stop the setinterval from infinite we have clearinterval 

setTimeout(function(){clearInterval(tim); console.log("stopper")},4000)