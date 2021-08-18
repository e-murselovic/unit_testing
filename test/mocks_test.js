var chai = require('chai');
const { mock } = require('sinon');
var should = chai.should();
var sinon = require('sinon');

var API = {
    isAlive: function()
    {
        try{
            var pingOneSucess = this.Ping();
            var pingTwoSucess = this.Ping();
            var pingThreeSucess = this.Ping();
        } catch(e) {
            return new Error('ping thew exeption.');
        }

        if(pingOneSucess && pingTwoSucess && pingThreeSucess)
            return true;

        return false;
    },

    Ping: function()
    {
        return true;
    },

    KillServer : function() 
    {
        
    }
}

describe('IsAlive Testing of Mocks', function()
{
    it('should call ping 3 times', function()
    {
        var mockApi = sinon.mock(API);
        mockApi.expects('Ping').exactly(3);

        API.isAlive();

        mockApi.verify();

        mockApi.restore();

    });

    it('should call ping at least 3 times', function()
    {
        var mockApi = sinon.mock(API);
        mockApi.expects('Ping').atLeast(3);

        API.isAlive();

        mockApi.verify();

        mockApi.restore();

    });
    it('should call ping no more than 3 times', function()
    {
        var mockApi = sinon.mock(API);
        mockApi.expects('Ping').atMost(3);

        API.isAlive();

        mockApi.verify();

        mockApi.restore();

    });

    it('should not call killserver', function()
    {
        var mockApi = sinon.mock(API);
        mockApi.expects('KillServer').never();

        API.isAlive();

        mockApi.verify();

        mockApi.restore();

    });
});