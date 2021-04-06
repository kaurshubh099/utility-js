const testFunctions = require('./function');

describe('head' , ()=>{
    it('function should return null if array is empty',()=>{
        expect(testFunctions.head([])).toEqual(null);
    });

    it('function should return first element of the array',()=>{
        expect(testFunctions.head([6,2,1])).toEqual(6);
    });
});

describe('tail' , ()=>{
    it('function should return empty array if array is empty',()=>{
        expect(testFunctions.tail([])).toEqual([]);
    });

    it('function should return all the elements except the first element',()=>{
        expect(testFunctions.tail([6,2,1])).toEqual([2,1]);
    });
});

describe('map' , ()=>{

    it('function should return empty array if array is empty and function is cube',()=>{
        expect(testFunctions.map([],testFunctions.cube)).toEqual([]);
    });

    it('function should return result array and function is cube & array is non-empty',()=>{
        expect(testFunctions.map([1,2,3],testFunctions.cube)).toEqual([1,8,27]);
    });

    it('function should return result array and function is identity & array is non-empty',()=>{
        expect(testFunctions.map([1,2,3],testFunctions.identity)).toEqual([1,2,3]);
    });

    it('function should return result array and some function is passed & array of objects is passed as argument ',()=>{
        expect(testFunctions.map([{x : 10}],someObject => someObject.x + 1)).toEqual([11]);
    });
});

describe('filter' , ()=>{

    it('function should return non-empty array if array passed as argument is non-empty',()=>{
        var result = testFunctions.filter([1,2,3],x => true);
        expect(result.length).toBeGreaterThan(0);
    });

    it('function should return empty array if array passed as argument is empty',()=>{
        var result = testFunctions.filter([],x => true);
        expect(result.length).toEqual(0);
    });
});

describe('reduce' , ()=>{

    it('function should return start char if array is empty and start character is not null',()=>{
        expect(testFunctions.reduce([],(x,y)=>x+y,10)).toEqual('10');
    });

    it('function should return undefined if array is empty and start character is null',()=>{
        expect(testFunctions.reduce([],(x,y)=>x+y,null)).toBeUndefined();
    });

    it('function should return result after applying reducer function passed as an argument',()=>{
        expect(testFunctions.reduce(['a','b','c'],(x,y)=>x+y,null)).toEqual('abc');
    });

    it('function should return result after applying reducer function passed as an argument',()=>{
        expect(testFunctions.reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });

});

describe('maximum',()=>{

    it('function should return greatest element if argument array is non-empty',()=>{
        expect(testFunctions.maximum([3,5,1])).toEqual(5);
    });

});

describe('minimum',()=>{

    it('function should return smallest element if argument array is non-empty',()=>{
        expect(testFunctions.minimum([3,5,1])).toEqual(1);
    });

});

