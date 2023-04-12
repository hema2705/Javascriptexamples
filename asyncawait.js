//asyncawait.js
function placeorder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee') {
            resolve(console.log("order received"));
        }
        else {
            reject(console.log("order deffered"))
        }
    })
}

function processorder(order) {
    return new Promise(function (resolve) {
        console.log("order is being processed")
        resolve(`${order} is served`)
    })
}


// placeorder("coffee").then(function(result){
//     console.log(result)
//     processorder(result)
// })
// order received
// undefined
// order is being processed


// the above then is used to handle the promise of placeorder

// in order to handle the promise of processorder 
// we should return the promise from previous then and 
// use the returned promise and use then again for processorder 

/**
placeorder("coffee").then(function(orderplaced){

    console.log(orderplaced)
    return processorder(orderplaced)
}).then(function(orderplaced){
    console.log(orderplaced)
})
*/


// the above is called chaining of promise

/** 
for suppose if we have multiple promises then we can use 
async await keywords
these keywords work with fuctions 
*/

async function serveorder() {
    try {


        let orderplaced = await placeorder("coffee")
        console.log(orderplaced)

        let processedorder = await processorder(orderplaced)
        // await will wait for the promise to complete
        console.log(processedorder)
    } catch (error) {

    }
}

serveorder()

/**
 * priority of execution is first promises and then callbacks
 * 
 */
