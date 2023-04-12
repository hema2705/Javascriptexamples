//callbackfunction.js
let fn = (a,cb)=>
{
    console.log("first name"+ a)
    console.log("bbb")
    //cb("yeedunuri")
}

//fn("hema")

let ln =(b)=>{
    console.log("aaaa")
    console.log("last name"+ b)
}
//ln("yeedunuri")

// let cb be the callback function to fn

fn("hema",ln("yeedunuri"))