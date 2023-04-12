// filter.js
const givenvalues = [ 1,2,3,4,5]
const evenvalues =[]
// finding the even numbers
for(var i=0;i<givenvalues.length;i++)
{
        if(givenvalues[i]%2 ==0)
        {
            evenvalues.push(givenvalues[i])
        }
}

console.log(evenvalues)

// using the filter method

const evenfn = givenvalues.filter((n)=>{
    return n%2==0 // here write the condition
})
console.log(evenfn)
