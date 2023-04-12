//constructors.js
let car1 = {
    name:"hyundai",
    color:"red"

}

let car2 ={
    name:"BMW",
    color:"blue"

}

// constructor functions 
function createcar(_name,_color){
this.name = _name
this.color = _color
this.result  = ()=>{
    console.log(`${this.name} and ${this.color}`)
}
}
let c1 = new createcar('Audi','black')
console.log(c1)
console.log(c1.result)