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
console.log(SelectionSort([{"Name":"Ram","Salary":100000},{"Name":"Ramesh","Salary":10000},{"Name":"Rakesh","Salary":500000},{"Name":"Riya","Salary":6500000},{"Name":"Ritwik","Salary":45000}]));
//console.log(SelectionSort([10,5,8,20,2,18]));