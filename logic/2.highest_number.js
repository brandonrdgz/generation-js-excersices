let numbers = prompt("Type the numbers separated by comma");
numbers = numbers.split(",");
numbers = numbers.map(n => parseInt(n));
let max = Number.MIN_SAFE_INTEGER;

for (const number of numbers) {
    if (number > max) {
        max = number;
    }
}

console.log(`The highest number is ${max}`);