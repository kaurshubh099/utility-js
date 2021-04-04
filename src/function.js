import { max, min } from "moment";

const functions = {
    head(array1) {
    if (array1.length == 0) {
        return null;
    }
    return array1[0];
    },
    tail(array1){
    if(array1.length ==0){
        return [];
    }
    array1.shift();
    return array1;
    },
    maximum(array1){
        return max(array1);
    },
    minimum(array1){
        return min(array1);
    },
    identity(value){
        return value;
    },
    cube(value){
        return value*value*value ; 
    },
    mapArray(array1,operation){
        array2=[]
        array2.push(operation(array1));
        return array2;
    }
}
module.exports  = functions;