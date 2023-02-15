let a = 2;
function InsertionSort(arr) {
    let n = arr.length;
    for(let i = 1; i < n; i++){
        a = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > a){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = a;
    }
    return arr;
}
var arr=[7,9,12,15,18,20,a]
console.log(InsertionSort(arr));