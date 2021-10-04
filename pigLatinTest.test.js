const translate = require('./pigLatin');

describe('translate', function() {

    test('translate apple to applyway', function() {
        expect(translate('apple')).toEqual('appleway');
    });
    test('translate else to elseway', function() {
        expect(translate('else')).toEqual('elseway');
    });
    test('translate APPLE to appleway', function() {
        expect(translate('APPLE')).toEqual('appleway');
    });
    test('translate giraffe to iraffegay', function() {
        expect(translate('giraffe')).toEqual('iraffegay');
    });
    test('translate iowa to iowaway', function() {
        expect(translate('iowa')).toEqual('iowaway');
    });
    test('translate yellow to ellowyay', function() {
        expect(translate('yellow')).toEqual('ellowyay');
    });
    test('translate black to ackblay', function() {
        expect(translate('black')).toEqual('ackblay');
    });
    test('translate splendid to endidsplay', function() {
        expect(translate('splendid')).toEqual('endidsplay');
    });








});