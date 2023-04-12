//polymorphysm.js
class Shapes{

    sides()
    {
        console.log("A geometric shape can have n sides")
    }

}

class Triangle extends Shapes{

    sides()
    {
        console.log("A Triangle has 3 sides")
    }
}

class Square extends Shapes{
    sides()
    {
        console.log(`A Square has 4 sides`)
    }
}

let sq1 = new Square()
sq1.sides()

let tri1 = new Triangle()
tri1.sides()
