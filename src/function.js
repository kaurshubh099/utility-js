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
    filterUpperCase(value){
        if(value===value.toUpperCase){
            return true;
        }
        return false; 
    },
    map(array1,operation){
        var array2=[]
        array2 = mapFunction(array1,array2,operation,0);
        return array2;
    },
    filter(array1,condition){
        var array2 =[]
        for (x in array1){
            if(condition(x)){
                array2.push(x);
            }
        }
        return array2;
    }
}
module.exports  = functions;

function mapFunction(array1,array2,operation,n){
    if(n==array1.length){
        return array2;
    }
    else{
        array2.push(operation(array1[n]));
        return mapFunction(array1,array2,operation,n+1);
    }

}