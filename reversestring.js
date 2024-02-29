function reversestring(str)
{
    return str.split('').reverse().join('');
}
var originalstring = "reverse"
var reversestring = reversestring(originalstring);
console.log(`original string: ${originalstring}`);
console.log(`Reversed string: ${reversestring}`);