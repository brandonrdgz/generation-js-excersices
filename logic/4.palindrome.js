let input = prompt("Type the sentence to check if is a palindrome: ");

function isPalindrome(input) {
    input = input.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z]/g, "")
    .toLowerCase();

    for(let i = 0; i < input.length; i++) {
        if (input.charAt(i) !== input.charAt(input.length - 1 - i)) {
            return false;
        }
    }

    return true;
}


console.log(`The string '${input}' is ${isPalindrome(input) ? "" : "not"} a palindrome`);