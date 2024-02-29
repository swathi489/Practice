function palindrome(str)
{
    var clearstr  = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

    return clearstr = str.split('').reverse().join('');
    
}
 var string = "mango"
 var reverse = palindrome(string)
 console.log(`The given ${string} and ${reverse} is palindrome`);
