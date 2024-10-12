function secretName(strings) {
    strings = strings.sort();
    let name = "";

    for (const element of strings) {
        name += element.charAt(0);
    }

    return name;
}

const testStrings = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];

console.log(`Secret name: ${secretName(testStrings)}`);