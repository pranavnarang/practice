var assert = require('assert');

const defangIPaddr = require("../Script");

describe('DeFangIPAddress Tests', function(){
    it('Should return IP defanged 1', function(){
        assert.equal("255[.]100[.]50[.]0", defangIPaddr("255.100.50.0"));
    })
    it('Should return IP defanged 2', function(){
        assert.equal("1[.]1[.]1[.]1", defangIPaddr("1.1.1.1"));
    })
});