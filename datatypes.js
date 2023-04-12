//datatypes.js
let fn = 'hema'
let ln = fn
fn = "hema2"
console.log(fn)
console.log(ln)
// no matter if fn is ressigned ln is not efffected 
// these are assigned in stack memory with the values

let car ={
    color:"red",
    make:"audi",
    country:"india"
}

let car2 = car // the assiginment is pointer 
// for objects the stack holds the reference of the object locations


console.log(car)
console.log(car2)
// output 
// { color: 'red', make: 'audi', country: 'india' }
// { color: 'red', make: 'audi', country: 'india' }
car2.color='blue' // making changes WILL effect the car object also 

console.log(car)
console.log(car2)
// { color: 'blue', make: 'audi', country: 'india' }
// { color: 'blue', make: 'audi', country: 'india' }

// spread operator {...} 3 dots 

let car3 = {... car} // shallow copy 
console.log(car3) 

car3.color = 'green'
console.log(car3) 
console.log(car) 
// { color: 'green', make: 'audi', country: 'india' }
// { color: 'blue', make: 'audi', country: 'india' }

// hence using the spread operator will be used so that changes 
// will not effect the assigned value 
// it will take the first properties and then creates the reference
// means the changes in the nested objects are not changed 
// below is example 

let student = {
    name:'hema',
    class:1,
    marks:{
        maths :100,
        english: 50,
        grade :"A"
    }
}

// using spread operator create new obj 

let student2 = {...student}
student2.marks.grade ="A+"
student2.name = 'Aadya'
console.log(student2) 
//{ name: 'Aadya', class: '1 grade', marks: { maths: 100, english: 80 } }



// DEEP COPY : the entire reference is copied

let student3 = JSON.parse(JSON.stringify(student))
console.log(student3)
student3.marks.maths = 95
console.log(student3)
