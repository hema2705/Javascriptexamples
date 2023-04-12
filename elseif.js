var a = 7.5
if(a > 9)
{
    console.log(a)
}
else if( a< 8 && a> 7)
{
    console.log(a)
}
else{
    console.log("fail")
}

for(var i=0;i<10;i++)
{
    console.log(i)
}

var num = [2,3,4,4,6,7]
var squares =[]
for(var i=0;i<num.length;i++)

{
    squares.push(num[i]*num[i])
}
console.log("squares:" + squares)
console.log( squares)


var i=1
var n =10
while(i<=10)
{
    console.log("while"+i)
    i++

}
var i=1

do
{
    console.log("do while"+i)
}while(i<1)