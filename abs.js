function test(n)
{
    return (Math.abs(100-n)<=20)||(Math.abs(400-n)<=20);
}
console.log(test(101));
console.log(test(10));
console.log(test(90));
console.log(test(200));