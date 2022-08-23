function findSecondMinNum(array){
    let min=Number.MAX_VALUE
    for(let i=0;i<array.length;i++){
        if(array[i]<min){
            min=array[i];
        }
}
let secondMin=Number.MAX_VALUE
for(let i=0;i<array.length;i++){
    if(array[i]<secondMin && array[i]>min){
        secondMin=array[i];
    }
}
console.log("Second Min Number:",secondMin)
}
findSecondMinNum([10,13,5,7,3,11])
findSecondMinNum([11,34,54,22,13,78])