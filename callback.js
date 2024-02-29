// function message(firstname,callback){
// console.log(`hi`)
// callback(firstname)
// }

// function name(firstname)
// {
// console.log("hi"+firstname)  
// }

// message("latha",name)

function rain(parameter,callback)

{
callback(parameter)
}
function sun(parameter)
{
console.log(`it is ${parameter}`)
}
rain("raining",sun)