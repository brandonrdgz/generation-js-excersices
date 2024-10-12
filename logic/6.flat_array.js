function flatArray(...array) {
    let flattenArray = [];

    flatArrayRec(array, flattenArray);

    return flattenArray;
}

function flatArrayRec(array, flattenArray) {
    for (const element of array) {
        if (Array.isArray(element)) {
            flatArrayRec(element, flattenArray);
        }
        else {
            flattenArray.push(element);
        }
    }
}

const testArray = [1, [2, 3, [4, 5, [6]]]];
console.log(flatArray(testArray));