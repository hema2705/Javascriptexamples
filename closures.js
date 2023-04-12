//closures.js
// lexical scope : a function defined inside a function will have 
// always have acces to its outer scope 

function school() {
    let name = "high school"
    function admin() {

        console.log(`school name is ${name}`)

        function playground() {
            let indoorsport = "chess"
            console.log(`sports played in  ${name} is ${indoorsport} `)
            return playground
        }

        function classroom() {
            let allclases = 10
            console.log(`total classes in ${name} are ${allclases}`)
            return classroom
        }

        return playground
    }
    return admin
}
let school1 = school()
console.log(school1)
school1()

let pg  = school1()
pg()
