

function sumTriangle(array){
    //base condition
    if(array.length==1){
        console.log(array);
        return;
    }
    //reduce array size by sum
    let reducedArray=[]
    for(let i=0;i<array.length-1;i++){
        reducedArray[i]=array[i]+array[i+1]
    }
    sumTriangle(reducedArray)
    console.log(array);
}
const array=[1,2,3,4,5]
//starting point
sumTriangle(array);