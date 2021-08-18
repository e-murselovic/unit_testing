module.exports = isAlive;

function isAlive(ping)
{
    try {
        var pingOne = ping();
        var pingTwo = ping();
        var pingThree = ping();
    } catch(e) {
        return new Error('ping throw exception');
    }

    if (pingOne && pingTwo && pingThree)
        return true;

    return false;
}