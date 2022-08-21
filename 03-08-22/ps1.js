function findMinMax(array){
    let min=Number.MAX_VALUE;
    let max=Number.MIN_VALUE;
    for(i=0;i<array.length;i++){
        if(array[i]<min)
        min=array[i];
        
        if(array[i]>max)
        max=array[i];
    }
    console.log([min,max])
}
findMinMax([2,3,15,6])  

//const array=[2,3,15,6]
//let i=min;
//let j=max;
//if(a[i]<a[j])
//console.log(array.filter(num=>a[i],a[j]))