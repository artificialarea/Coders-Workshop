/*

TASK:
Given a letter, return its position in the alphabet.
For example, given `'a'`, return `1`. Given `'Y'` return `25`.

v2 SOLUTION from bry-an ////////////////////////////////// (including testing)

// use ASCII key codes
// have a string with all letters in alphabet in order -> find place in that string

// `indexOf` approach

*/

const assert = require('assert');

function getLetterPosition(letter) {

    // validate
    if (typeof letter !== 'string' || letter.length > 1) return null;

    // alphabet array to check against
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    if (alphabet.indexOf(letter.toLowerCase()) === -1) {
        return null;
    }
    else {
        return alphabet.indexOf(letter.toLowerCase()) + 1;
    }

}


// CONSOLE LOG TEST DATA 

// console.log(positionInAlphabet('Y'));

// const dataSet = ['a', 'y', 'Y', 'Z', 'tg', 4];

// dataSet.map(letter => {
//     console.log(getLetterPosition(letter));
// })



// ASSERT TEST DATA



assert.strict(getLetterPosition('a'), 1);
assert.strict(getLetterPosition('A'), 1);

module.exports = { getLetterPosition };
