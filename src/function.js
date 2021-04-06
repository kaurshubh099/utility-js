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
        if(array1.length==0)
            return null;
        return Math.max.apply(null,array1);
    },
    minimum(array1){
        if(array1.length==0)
            return null;
        return Math.min.apply(null,array1);
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
        var array2=[];
        array2 = mapFunction(array1,array2,operation,0);
        return array2;
    },
    filter(array1,condition){
        var i,array2 =[];
        for ( i=0;i<array1.length;i++){
            if(condition(array1[i])){
                array2.push(array1[i]);
            }
        }
        return array2;
    },
    reduce(array1,operation,x){
        var result;
        if(x)
            result = x.toString();
        else if(array1.length > 0){
          result = '';
        }
        return reduceFunction(array1,result,operation,0);
      }
}
module.exports  = functions;

function mapFunction(array1,array2,operation,n){
    if(n==array1.length){
        return array2;
    }
    array2.push(operation(array1[n]));
    return mapFunction(array1,array2,operation,n+1);
}

function reduceFunction(array1,result,operation,n){
    if(n == array1.length){
        return result;
    }
    result = result + operation("",array1[n].toString());
    return reduceFunction(array1,result,operation,n+1);
}