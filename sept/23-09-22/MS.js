//Divide and Conquer 
//Recursively
//lb = left = Lower Bound
//ub = right = Upper Bound
function mergeSort(array,lb,mid,ub){
    //1.Divide the array based on pointers.
    //create left and right array
    let leftArrayLength = mid - lb + 1;
    let rightArrayLength = ub - mid;
    let leftArray = new Array(leftArrayLength);
    let rightArray = new Array(rightArrayLength);

    for(let i = 0; i < leftArrayLength; i++){
        leftArray[i] = array[ lb + i ];
    }
    for(let j = 0; j < rightArrayLength; j++){
        rightArray[j] = array[mid + 1 + j]; 
    }

    //2.Merge Part
    let i = 0;
    let j = 0;
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
    //copy remaining elements from both array.
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
//Just giving pointers to divide,and then merge later
function preMergeSort(array,lb,ub){
    //Stop Recursion
    if(lb >= ub){
        return;
    }

    //step 1: Find mid element
    let mid = parseInt((lb+ub)/2);
    //console.log(mid);
    //to create left array
    preMergeSort(array, lb, mid);
    //to create right array
    preMergeSort(array, mid+1, ub);
    mergeSort(array, lb ,mid, ub);

}

const arr = [15,5,24,8,1,3,16,10,20];
preMergeSort(arr,0,arr.length-1);
console.log(arr);