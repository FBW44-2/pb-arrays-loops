// "hello" -> 1
// "apple" -> 0
// "string" -> 3
// "STRAWBERRY" -> 3
// "MELON" -> 1
// "piNNEaPLE" -> 1

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

// All vowels
// const a = 'a';
// const o = 'o';
// const u = 'u';
// const e = 'e';
// const i = 'i';


// Refactor to use array
const vowels = [
    'a',
    'o',
    'u',
    'e',
    'i'
];

// for (let currentWord of words) {
for (let j = 0; j < words.length; j++) {
    const currentWord = words[j];
    console.log(`Checking the word ${currentWord}`);

    let firstVowelIndex = currentWord.length - 1; // set an index, as large as possible

    for (let i = 0; i < vowels.length; i++ ) {
        const currentVowel = vowels[i];

        console.log(`Current vowel is ${currentVowel}`);
        console.log(`Current index is ${i}`);

        const indexOfVowel = currentWord.indexOf(currentVowel);

        console.log(`Index of vowel ${currentVowel} is ${indexOfVowel}`);
        
        if (indexOfVowel !== -1 && indexOfVowel < firstVowelIndex) {
            firstVowelIndex = indexOfVowel;
        }
        console.log('end of iteration -------------------');
    }

    console.log(`The index of the first vowel is ${firstVowelIndex} \n\n`);
}

