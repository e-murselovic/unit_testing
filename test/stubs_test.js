var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

var sinon = require('sinon');

var isAlive = require('../stubs');

describe('isAlive Tests', function()
{
    it('should return true when ping callback returns true', function()
    {   
        var pinger = sinon.stub();
        pinger.returns(true);

        var websiteIsAlive = isAlive(pinger);

        websiteIsAlive.should.be.true;
    });

    it('should return true when ping returns true three times in a row', function()
    {   
        var pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(true);
        pinger.onThirdCall().returns(true);

        var websiteIsAlive = isAlive(pinger);

        websiteIsAlive.should.be.true;
    });

    it('should return false when ping does not returns true three times in a row', function()
    {   
        var pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(false);
        pinger.onThirdCall().returns(true);

        var websiteIsAlive = isAlive(pinger);

        websiteIsAlive.should.be.false;
    });

    it('should return an error when ping throws an error', function()
    {   
        var pinger = sinon.stub();
        pinger.throws(function() { return new Error(); });
        var error = isAlive(pinger);

        error.message.should.equal('ping throw exception');
    });
});
