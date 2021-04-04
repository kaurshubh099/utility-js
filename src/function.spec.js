const functions = require('./function');

describe('head', () => {

    it('head of [1,2,3,4] is 1', () => {
        expect(functions.head([1,2,3,4])).toEqual(1);
    });

})

describe('tail', () => {

    it('tail of [1,2,3,4] is [2,3,4]', () => {
        expect(functions.tail([1,2,3,4])).toEqual([2,3,4]);
    });
    it('tail of [] is []', () => {
        expect(functions.tail([])).toEqual([]);
    });

})

describe('map', () => {

    it('map([1,2,3],cube)=[1,8,27]', () => {
        expect(functions.map([1,2,3],cube)).toEqual([1,8,27]);
    });

})

