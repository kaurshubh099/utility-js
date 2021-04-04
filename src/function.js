function head(array1) {
    if (array1.length == 0) {
        return null;
    }
    return array1[0];
}
function tail(array1){
    if(array1.length ==0){
        return [];
    }
    return array1.shift();
}
export default head;
export default tail;