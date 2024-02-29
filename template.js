let name =  "laptop"
let quantity = "3"
let status = "Delivered"
let productstatus = `Product status is ${status === 'Delivered'? "Order placed successfully!" : "not Delivered"}`;

function update()
{
    return "on 20-02-2019"
}
let product =  ` have ordeered ${name} ${quantity} ${update()} ${productstatus}`;
console.log(product) // i have
