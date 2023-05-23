

function findSorted(array,i) {
    //base condition
    if(i==array.length-1){
        return true;
    }
    if(array[i] > array[i+1]){
        return false;
    }
    //how to reach towards base condition
    return findSorted(array,i+1); //++i also works
}
//const array=[5,6,4,3,9]; //false
const array= [3,5,7,8,9]; //true
//Starting Point
console.log(findSorted(array,0))
