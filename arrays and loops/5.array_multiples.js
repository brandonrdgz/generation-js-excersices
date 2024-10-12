function arrayMultiples(number, length) {
    let multiples = [];

    for (let i = 1; i < length + 1; i++) {
        multiples.push(number * i);
    }

    return multiples;
}

const number = 2;
const length = 10;

console.log(arrayMultiples(number, length));