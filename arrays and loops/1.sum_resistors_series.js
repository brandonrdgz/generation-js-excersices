function sumResitance(array) {
    let sum = 0;

    for (const element of array) {
        sum += Math.abs(element);
    }

    return sum;
}

let testResistors = [-1,5,6,3];
console.log(`The sum of resistances ${testResistors} is: ${sumResitance(testResistors)} ohms`);