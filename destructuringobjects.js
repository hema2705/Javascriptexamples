// destructuringobjects.js unpack the object 
let objcar ={
    color:"red",
    speed:210,
    make:"Audi",
    Address :{
        country:"Poland",
        zipcode:"50-413"
    }
}


let { color,speed,make ,Address} = objcar // destructuring obj
console.log(color)
console.log(speed)
console.log(make)
console.log(Address)
let { Address:{country}} = objcar // destructuring address in obj
console.log(country)

// reassiging to new name variables as below
let { color :a,speed:b,make:c ,Address:d} = objcar // destructuring obj
console.log(a)
console.log(b)
console.log(c)
console.log(d)

