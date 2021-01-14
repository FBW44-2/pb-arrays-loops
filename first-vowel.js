// "hello" -> 1
// "apple" -> 0
// "string" -> 3
// "STRAWBERRY" -> 3
// "MELON" -> 1
// "piNNEaPLE" -> 1

// All vowels
const a = 'a';
const o = 'o';
const u = 'u';
const e = 'e';
const i = 'i';

// Words
const word = "hello" // 1
// const word = "apple" // 0
// const word = "string" // 3
// const word = "STRAWBERRY" // 3
// const word = "MELON" // 1
// const word = "piNNEaPLE" // 1

let index = word.length - 1; // set an index, as large as possible

// Logical AND operator: &&
// short circuit evaluation - left side is false, so no need to continue with evaluation
if (word.indexOf(a) !== -1 && word.indexOf(a) < index) {
    index = word.indexOf(a); // update the index value
}

// Truth table
// a && b
// a      b      result
// false  false  false
// true   true   true
// false  true   false
// true   false  false

// Truth table
// a || b
// a      b      result
// false  false  false
// true   true   true
// false  true   true
// true   false  true

const indexOfO = word.indexOf(o);
if (indexOfO !== -1 && indexOfO < index) {
    index = indexOfO;
}

const indexOfU = word.indexOf(u);
if (indexOfU !== -1 && indexOfU < index) {
    index = indexOfU;
}

const indexOfE = word.indexOf(e);
if (indexOfE !== -1 && indexOfE < index) {
    index = indexOfE;

}

const indexOfI = word.indexOf(i);
if (indexOfI !== -1 && indexOfI < index) {
    index = indexOfI;
}

console.log(`First vowel index is ${index}`);