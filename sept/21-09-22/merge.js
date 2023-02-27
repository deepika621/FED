
function Merge(A,B){
    let m = A.length;
    let n = B.length;
    let C=[];
    let i,j,k;
    i=j=k=0;
    while(i<m && j<n){
        if(A[i] < B[j]){
            C[k] = A[i];
            i++;
        }
        else{
            C[k] = B[j];
            j++;
        }
        k++;
    }
    for(i = 0; i < m; i++){
        C[k] = A[i];
        k++;
    }
    for(j = 0; j < n; j++){
        C[k] = B[j];
        k++;
    }
}
var A = [2,10,18,20,23]
var B = [4,9,19,25]
console.log(Merge(A,B));