//let n=arr.length;
function BubbleSort(arr,k){
    for(var i=0;i<k;i++){
        var isSwapped=false
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isSwapped=true
            }
        }
        if(!isSwapped)
        break
    }
    return arr;
    //console.log(arr);
}
var k=1
var arr=[5,4,3,2,1,6,2]
arr=BubbleSort(arr,k)
console.log(arr[arr.length-1])