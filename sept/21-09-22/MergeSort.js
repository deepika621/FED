
function mergeSort(array,lb,mid,ub){
    let leftArrayLength = mid - lb + 1;
    let rightArrayLength = ub - mid;
    let leftArray = new Array(leftArrayLength);
    let rightArray = new Array(rightArrayLength);

    for(let i = 0; i < leftArrayLength; i++){
        leftArray[i] = array[ lb + i ];
    }

    for(let j = 0; j < rightArrayLength; j++){
        rightArray[j] = array[ mid + 1 + j ];
    }
    let i=0;
    let j=0;
    let k = lb;
    while(i < leftArrayLength && j < rightArrayLength){
        if(leftArray[i] < rightArray[j]){
            array[k] = leftArray[i];
            i++;
        }
        else{
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }
    while(i < leftArrayLength){
        array[k] = leftArray[i];
        i++;
        k++;
    }
    while(j < rightArrayLength){
        array[k] = rightArray[j];
        j++;
        k++;
    }
    
}
function preMergeSort(array,lb,ub){
    if(lb >= ub){
        return;
    }
    let mid = parseInt((lb+ub)/2);
    preMergeSort(array,lb,mid);
    preMergeSort(array,mid+1,ub);
    mergeSort(array,lb,mid,ub);
}
const arr=[15,5,24,8,1,3,16,10,20];
preMergeSort(arr, 0,arr.length-1)
console.log(arr);
