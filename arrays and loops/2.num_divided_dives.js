function numDiv(number) {
    const hive = number / 2;

    return [hive, hive];
}

const testNumber = 15;

console.log(`The hives of the number ${testNumber} are: [${numDiv(testNumber)}]`);