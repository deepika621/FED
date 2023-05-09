
//T(n) => O(n)
function findPairForSum(array,num){
    var obj={}
    for(let i=0;i<array.length;i++){
        let firstNum = array[i];
        let secondNum = num - array[i];
        if(!obj[firstNum.toString()]){
            //making entry for first num
            obj[firstNum.toString()]=i;
        }
        if(obj[secondNum.toString()] && obj[secondNum.toString()]!=i){
            console.log([firstNum,secondNum]);
            return;
        }
    }
    return;     
}
findPairForSum([10,20,10,40,50,70,80,60],100);