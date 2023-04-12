//functionmethodscallapplybind.js
let obj1 ={
    name:"hema",
    age:33,
    getsub:function(){console.log(`${this.name}`)}
}

let obj2={
    name:"hemay",
    age:34,
 
   // getsub:()=>console.log("fn")
}

obj1.getsub.call(obj2) // this will avoid rewriting the same function
// in the different object in the above in obj2

let alias_getsub = obj1.getsub.bind(obj2)
alias_getsub() 

// this is the function which uses the renaming using bind method and
// can be used at differen time

// APPLY method works same as CALL , but when passing the params 
// pass them as the array


const shape = {
    radius: 10,
     diameter() {
    return this.radius * 2;
    },
    perimeter: function(){ return 2 *3.12 * this.radius},
   };
   
   console.log(shape.diameter());
   console.log(shape.perimeter());