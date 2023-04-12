
var student = {
    fn : "hema",
    age : 33,
    married : false,
    subjects : ['maths',"sceienc"],
    address :{
        city : "wroclaw",
        pincode:"50-413"
    }

}

for(var stu in student)
{
    //stu  variable holds the object property keys
    console.log(student[stu])
}

var colors = ["red","blue","green"]

for( var color in colors)

{
    // here in arrays keys are treated as the indexes as array is reffered as
    // object it should have key value 
    console.log(color)
    console.log(colors[color])
}

// ****************** for of loop ***************

var scores = [10,9,8,10]
for(var score of scores)
{
    // diff is here score means property value 
    console.log(score)
}
// how to get indexes 

for (var [index,score] of scores.entries())
{
    console.log(index +":"+score)
}

// for iterationg over strings we have to use the for of loop 

var str = "HEMA"
for(var c in str)
{
    console.log(str[c])
}

for(var c of str)
{
    console.log(c)
}