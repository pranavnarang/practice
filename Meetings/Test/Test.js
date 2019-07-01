const canIAttendAll = require('../Meetings')

var assert = require('assert');

describe('Meetings', function() {
    it('Should return false', function() {
        let timeSetOne = [[0, 30],[5, 10],[15, 20]];
        let timeSetThree = [[3, 42],[42,49],[30,31]];

        let inputs = [timeSetOne, timeSetThree];

        inputs.map( (input) => {
            assert.equal(canIAttendAll(input), false);
        });

    });
    it('Should return true', function() {
        let timeSetTwo = [[0,5],[6,10]];
        let timeSetFour = [[0, 30],[52, 59],[35, 50]];let timeSetFive = [[6,10],[0,5]];

        let inputs = [timeSetTwo, timeSetFour, timeSetFive];

        inputs.map( (input) => {
            assert.equal(canIAttendAll(input), true);
        });
    })
});