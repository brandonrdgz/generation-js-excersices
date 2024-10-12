function antipodalAverage(numbers) {
    const lengthHive = numbers.length / 2;
    const lengthHiveMod = numbers.length % 2;

    if (lengthHiveMod !== 0) {
        numbers.splice(Math.trunc(lengthHive), 1);
    }

    const averages = [];

    for (let i = 0; i < numbers.length / 2; i++) {
        let calc = numbers[i] + numbers[numbers.length - 1 - i];
        calc /= 2;
        averages.push(calc);
    }

    return averages;
}

const testArray = [1,2,3,5,22,6];

console.log(antipodalAverage(testArray));