function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        var result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

const num =5 
console.log(`Factorial of ${num}  is ${factorial(num)} `)
