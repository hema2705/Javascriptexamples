// addition using call back function 

const add = (a,b)=>{
    return a+b
}

const sum = (addfn , a , b)=>
{
    return addfn(a,b)
}

console.log(sum(add,3,4))
