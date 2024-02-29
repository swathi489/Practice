function purchase(){
    return  new Promise((resolve,reject) => 
{
    offer = true
    if (offer == true)
    resolve("vacation")
    else
    reject()
})
}
purchase().then((reason)=> console.log(`Purchase the dress for ${reason} `))
.catch(() => console.log("dont go"))