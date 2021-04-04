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
    return array1.shift();
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
    }
}
module.exports  = functions;