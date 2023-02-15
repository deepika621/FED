function InsertionSort(arr) {
    let n = arr.length;
    for(let i = 1; i < n; i++){
        temp=arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
var arr=[9,6,7,3,2]
console.log(InsertionSort(arr));