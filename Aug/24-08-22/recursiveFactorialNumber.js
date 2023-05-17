

function findFactorial(num){
    //if(num==0){
        //return 1;
    //}
    //Base Condition
    if(num<=1){
        return 1;
    }
    return num*findFactorial(num-1)
}
//Start of Recursion
console.log(findFactorial(5))