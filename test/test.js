var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

var sinon = require('sinon');

var Add = require('../maths');
/*
describe('Addition tests', function() 
{
    it('should return 3 when passed one and two', function()
    {
        var numberOne = 1;
        var numberTwo = 2;
        var expectedResult = 3;

        var actualResult = Add(numberOne, numberTwo);

        actualResult.should.equal(expectedResult);
        expect(actualResult).to.equal(expectedResult);
        assert.equal(actualResult, expectedResult);
    });

    it('should return not 3 when passed one and four', function()
    {
        var numberOne = 1;
        var numberTwo = 4;
        var expectedResult = 3;

        var actualResult = Add(numberOne, numberTwo);

        actualResult.should.not.equal(expectedResult);
        expect(actualResult).to.not.equal(expectedResult);
        assert.notEqual(actualResult, expectedResult);
    });
});*/

describe('Spy Tests', function()
{
    it('should log result of add', function()
    {
        var numberOne = 1;
        var numberTwo = 2;

        var logSpy = sinon.spy();
        Add(numberOne, numberTwo, logSpy);

        logSpy.called.should.be.true;
    });

    it('should call log with result of add', function()
    {
        var numberOne = 1;
        var numberTwo = 2;

        var logSpy = sinon.spy();
        Add(numberOne, numberTwo, logSpy);

        logSpy.calledWith(3).should.be.true;
    });
});