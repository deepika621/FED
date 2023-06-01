
let result=[]
function findCombinations(arr,sum,i,current,result){
    //base condition
    if(sum==0){
        result.push(current.slice());
        return;
    }
    if(sum<0||i==arr.length){
        return;
    }
    current.push(arr[i]);
    findCombinations(arr,sum-arr[i],i,current,result);
    current.pop();
    findCombinations(arr,sum,i+1,current,result);
}
findCombinations([1,2,1],2)
console.log(result);