function singleDigitSum(num){
    const numStr=num.toString();
    if(numStr.length==1){
        return numStr;
    }
    let sum=0;
    for(i=0;i<numStr.length;i++){
        sum+=Number(numStr[i]);
    }
    if(sum>9){
        singleDigitSum(sum)
    }
    else{
        console.log(sum)
    }
}
singleDigitSum(12345)
//singleDigitSum(123)