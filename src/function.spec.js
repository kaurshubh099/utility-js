const testFunctions = require('./function');

describe('head', () => {

    it('head of [1,2,3,4] is 1', () => {
        expect(testFunctions.head([1,2,3,4])).toEqual(1);
    });

})

describe('tail', () => {

    it('tail of [1,2,3,4] is [2,3,4]', () => {
        expect(testFunctions.tail([1,2,3,4])).toEqual([2,3,4]);
    });
    it('tail of [] is []', () => {
        expect(testFunctions.tail([])).toEqual([]);
    });

})

describe('map', () => {

    it('map([1,2,3],cube)=[1,8,27]', () => {
        expect(testFunctions.map([1,2,3],testFunctions.cube)).toEqual([1,8,27]);
    });

})

