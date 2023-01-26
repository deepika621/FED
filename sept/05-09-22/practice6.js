

function sumOfArray(array){
    let sum=0;  //1
    for(let j=0;j<array.length;j++){
        sum=sum+array[j];
    }
    console.log(sum);
}
sumOfArray([3,5,6])

//space complexity s(n)=1
//time complexity  T(n) = O(n)