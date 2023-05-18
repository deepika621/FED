

function printIncreasingNumber(n){
    //base condition
    if(n==0){
        return;
    }
    //moving towards end
    printIncreasingNumber(n-1)
    //print n
    console.log(n)
}
printIncreasingNumber(5)