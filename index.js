const checkLength = str => str.length >= 1 && str.length <= 10;
const characterCount = str => checkLength(str) ? str.length : "String lenght must be from 1 to 10";

const reverseStr = str => str.split('').reverse().join('');
    class calculator {
        add= (a, b) => a + b;
        subtract= (a, b) => a - b;
        multiply= (a, b) => a * b;
        divide= (a, b) => a / b;
    }

const capitalizeStr = str => str[0].toUpperCase() + str.slice(1);
console.log(capitalizeStr('mommy'));
module.exports = {characterCount, reverseStr, calculator, capitalizeStr};