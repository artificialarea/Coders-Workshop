/*

TASK:
Given a letter, return its position in the alphabet.
For example, given `'a'`, return `1`. Given `'Y'` return `25`.

MY v1 SOLUTION //////////////////////////////////

It's all about charCodes...

Reference ASCII Table: https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
Where a = 97 ~ z = 122, 

1. make letter lowercase
2. get letter charCode
3. return charCode - 96 to get number between 1-26

*/

function positionInAlphabet(letter) {
    if (typeof letter !== 'string' || letter.length > 1) return null;
    return [letter, letter.toLowerCase().charCodeAt(0) - 96].join(' ');
}


// TEST DATA 

// console.log(positionInAlphabet('Y'));

const dataSet = ['a', 'y', 'Y', 'Z', 'tg', 4];

dataSet.map(letter => {
    console.log(positionInAlphabet(letter));
})




