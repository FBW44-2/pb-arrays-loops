// Words
// const word = "hello" // 1
// const word = "apple" // 0
// const word = "string" // 3
// const word = "STRAWBERRY" // 3
// const word = "MELON" // 1
// const word = "piNNEaPLE" // 1

// Refactor to use array
const words = [
    "hello",
    "apple",
    "string",
    "STRAWBERRY",
    "MELON",
    "piNNEaPLE"
];

// Pseudocode
// go over each character in the word
// check if it is a vowel
// save the position in a variable

const vowels = [
    'a',
    'o',
    'u',
    'e',
    'i'
];

// a
// 'age' ['a', 'g', 'e']

// 'age'.indexOf('a') // -1 or index
// 'age'.includes('a') // true or false

for (let j = 0; j < words.length; j++) {
    const word = words[j];
    
    for (let i = 0; i < word.length; i++) {
        const letter = word[i]; // h, then e and so on...
        
        // check if it is a consonant
        // if yes, then skip to next iteration
        // if (vowels.indexOf(letter) === -1) {
        //     continue;
        // }

        // Check if letter is a vowel
        if (vowels.indexOf(letter) !== -1) {
            console.log(`The index of the first vowel in the word ${word} is ${i} \n\n`);

            // i  = word.length;
            break;
        }

        // if (vowels.includes(letter)) {
        // }

        // check if letter is a vowel
        // if (
        //     letter === 'a' ||
        //     letter === 'o' ||
        //     letter === 'e' ||
        //     letter === 'i' ||
        //     letter === 'u' 
        // ) {
        // }
    }
}
