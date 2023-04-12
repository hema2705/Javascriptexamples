//classes.js
//creating a class and its objects 
class student {
    constructor(_name,_age,_subject)
    {
        this.name=_name
        this.age =_age
        this.subject=_subject
    }
    grades(){
        console.log("pass")
    }
}

let student1 = new student('hema','12','maths')
student1.grades()
console.log(student1)
