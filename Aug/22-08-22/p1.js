function findUniqueElement(array){
    const result=[];
    for(let i = 0; i<array.length; i++){
    //1. get element.

    //check if this reoccurs.
    for(let j = 0; j<array.length; j++){
        if(i!=j && array[i]==array[j]){
            break;
        }
        if(j==array.length-1){
            result.push(array[i]);
        }
    }
    }
    return result;
}
const array = [3,2,1,2,3]
const array1 = [3,4,2,1,2,3]
console.log(findUniqueElement(array));
console.log(findUniqueElement(array1));