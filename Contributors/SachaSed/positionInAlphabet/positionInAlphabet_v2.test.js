const { getLetterPosition } = require('./positionInAlphabet_v2');
// const { getLetterPosition } = require('./getLetterPosition');

describe(`getLetterPosition function`, () => {
    it(`should work with examples proveded`, () => {
        expect(getLetterPosition('a').toBe(1));
        expect(getLetterPosition('Y').toBe(25));

    });
});