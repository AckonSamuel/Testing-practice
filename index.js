const checkLength = str => str.length >= 1 && str.length <= 10;
const characterCount = str => checkLength(str) ? str.length : "String lenght must be from 1 to 10";

const reverseStr = str => str.split('').reverse().join('');

module.exports = {characterCount, reverseStr};