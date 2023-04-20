function findPairForSum(array,num){
    for(let i=0;i<array.length;i++){
        let firstNum = array[i];
        let secondNum = num - array[i]
        for(let j=0;j<array.length;j++){
            if(i!=j && array[j] == secondNum){
                console.log([firstNum, secondNum])
                return;
            }
        }
    }
    console.log("Pair Not Found")       
}
findPairForSum([10,20,10,40,50,70],50);