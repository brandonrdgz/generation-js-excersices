function factorial(number) {
    if (number < 1) {
        console.log("The number must be equal or greater than 1");
        return;
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}


const number = parseInt(prompt("Type the number to calculate factorial: "));
const result = factorial(number);

console.log(`The factorial of ${number} is ${result}`);