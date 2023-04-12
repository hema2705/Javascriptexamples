//encapsulation.js
function constructorfunc1(_name,_age)
{
    this.name = _name
    this.age = _age
}

let cf1 = new constructorfunc1("HEMA",33)
console.log(cf1)
cf1.name="HEMA Y" // remaing the name property
console.log(cf1) // the same object but witg renamed values printed

// this is not a best practice so the constructor function
// can be written as below to avoid modification of data

function cf2(_name,_age)
{
    var name = _name
    var age = _age
    this.getName = ()=>{ return name}

}

let ocf2 =new cf2("HEMA","25")
console.log(ocf2.getName())
console.log(ocf2.age)