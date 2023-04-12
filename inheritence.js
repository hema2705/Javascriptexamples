//inheritence.js
class parent{
    constructor(_name,_age)
    {
        this.name = _name
        this.age=_age
    }

    education()
    {
      console.log("is educated")
    }
}

class child extends parent{
    constructor(_name,_age,_sex)
    {
        super(_name,_age)// super method inherts the parenet class params mentioned
        this.sex= _sex
    }

    parenteducation(){
        super.education()
    }
}

let c1 = new child("hema","12","F")
console.log(c1)
let p2=new parent("hema","33")
let c2= new child("","","M")
console.log(c2)
console.log(p2)
c1.parenteducation()
c1.education()