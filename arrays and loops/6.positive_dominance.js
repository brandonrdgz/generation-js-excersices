function positiveDom(array) {
    let positivesCount = 0;

    for (const element of array) {
        if (element > 0) {
            positivesCount++;
        }
    }

    return positivesCount > (array.length - positivesCount);
}

const testArray = [-1, -3, -5, 4, 6767];
console.log(positiveDom(testArray));