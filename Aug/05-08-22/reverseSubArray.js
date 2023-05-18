function canArrayBeSorted(array){
    if(array.length==1){
        return true;
    }
    let startIndex;
    for(i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
            startIndex=i;
            break;
        }
    }
    let endIndex;
    for(i=startIndex;i<array.length;i++){
        if(array[i]<array[i+1] || i==array.length-1){
            endIndex=i;
            break;
        }
    }
    let decreasingArray=[]
    let j=0;
    for(let i=startIndex;i<=endIndex;i++){
        decreasingArray[j]=array[i];
        j++;
    }
    console.log("Decreasing Array:",decreasingArray)
    
    for(let i=decreasingArray.length-1;i>=0;i--){
        array[startIndex]=decreasingArray[i];
        startIndex++;
    }
    console.log("Main Array after reverse:",array);
    for(i=0;i<array.length-1;i++){
        if(array[i]>array[i+1]){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
//canArrayBeSorted([1,2,5,4,3])
canArrayBeSorted([1,2,4,5,3])