function sumAndAverage(n) {
    var sum=0;
    let average=0;
    for(let i=0;i<=n;i++){
        sum+=i;
        average=sum/n;
    }
    //res=(n*(n+1))%2
    //average=res/n;

    console.log(sum)
    console.log(average)}
sumAndAverage(4)
sumAndAverage(6)
sumAndAverage(10)
