

function SelectionSort(arr){
    let n=arr.length
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min != i){
            //swap(arr[i],arr[min])
            var temp=arr[min];
            arr[min]=arr[i];
            arr[i]=temp;
        }
    }
    return arr;
}

//Time complexity-O(n^2)
//var arr=[7,4,10,8,3,1];
//console.log(SelectionSort(arr))
console.log(SelectionSort([7,4,10,8,3,1]));
console.log(SelectionSort([10,5,8,20,2,18]));