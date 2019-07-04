var assert = require('assert');

var numJewelsInStone = require('../numJewelsInStone');

describe('Number of Jewels in Stone Test Cases', () => {
    it('Test lowercase single letter', () => {
        assert.equal(3, numJewelsInStone("a", "aaaAbzzz"));
    });
    it('Test multiple cases of single letter', () => {
        assert.equal(3, numJewelsInStone("aA", "aAAbbbb"));
    });
    it('Test different letters lowercase', () => {
        assert.equal(4, numJewelsInStone("ab", "aabbcccc"));
    });
    it('Test single letter not in first position', () => {
        assert.equal(4, numJewelsInStone("c", "aabbcccc"));
    });  
    it('Test case with no matches found', () => {
        assert.equal(0, numJewelsInStone("z", "ZZZ"));
    });
    it('Test random order of letters', () => {
        assert.equal(1, numJewelsInStone("z", "zaA"));
    });
});