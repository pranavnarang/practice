// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

var assert = require('assert');

var returnShortestDistance = require("../ShortestDistance")

describe('Shortest Distance Tests', function() {
    it('Base Case', function(){
        assert.equal(returnShortestDistance(["","",""]), 1);
    });
    it('Case One', function(){
        assert.equal(returnShortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "makes"), 1);
    })
    it('Case Three', function() {
        assert.equal(returnShortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"), 3)
    })
});