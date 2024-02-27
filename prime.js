function Prime(number) {
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= number; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
const number = 125;
if (Prime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
