function SelectionSort(arr){
    let n=arr.length
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
            //if(arr[j]<arr[min]){
            if(arr[j].localeCompare(arr[min]) == -1){
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
console.log(SelectionSort(["India","Australia","China","Russia","Brazil","Japan"]));
//console.log(SelectionSort([10,5,8,20,2,18]));
console.log(SelectionSort(["Deepika","TulasiRam","Hemanth","LavaKumar","UshaRani","Ulisha","Urmila"]));
console.log(SelectionSort(["UshaRani","Ulisha","Urmila","Upender","Ushanu","UmaSri"]));