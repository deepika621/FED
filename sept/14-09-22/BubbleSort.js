function bubbleSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        flag=false
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=true
            }
        }
        if(flag==false)
        break
    }
    return arr;
    //console.log(arr);
}
var arr=[8,5,7,3,2];
console.log(bubbleSort(arr))