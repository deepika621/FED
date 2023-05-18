
function findPrimeNumbers(n){
    for(let i=2;i<=n;i++){
        for(j=2;j<=i;j++){
            if(j==i){
            console.log(i);
            }
        if(i%j==0){
            break;
        }
    }
    }}
findPrimeNumbers(7);