var oc1 = {
    a:1,
    b:2,
    c:3
}
// accessing values using dot notation
console.log(oc1)
console.log(oc1.a)
console.log(oc1.b)
oc1.c = 4
console.log(oc1.c)

// bracket notation 
console.log('bracket notation')
console.log(oc1['a'])

var student = {
    fn : "hema",
    age : 33,
    married : false,
    subjects : ['maths',"sceienc"],
    address :{
        city : "wroclaw",
        pincode:50-413
    }

}

console.log(student)
student.marks = [98,100]
console.log(student)
student.married=false
console.log(student)
delete student.married
console.log(student)
console.log(student.subjects[0])
delete student.subjects[0]
console.log(student)
delete student.marks[0]
console.log(student)

