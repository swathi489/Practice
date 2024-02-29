// const team =["rs","re","dfbdfb"]
// const group = ["wewe","rsg","dsfds"]

// console.log(...team,...group)

//REST operator

function sum(...values)
{
let sum= 0;
values.map(add => sum += add);
console.log("sum",sum)
}

sum(2,3)
sum(1,2,3,4,5)
sum(1,9,5,7,3,4,52)