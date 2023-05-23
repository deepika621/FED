
var steps=0;

function makeItZero(num){

    //Base Condition
    if(num==0){
        console.log(steps);
        return;
    }
    steps=steps+1;
    //1.choose largest digit from number
    //2.substract it from main number
    //3.call it again with  result from step 2
    let array=num.toString().split('').map(i=> Number(i));
    let max = Math.max(...array);
    makeItZero(num-max);
}
//1.starting point
makeItZero(27) //5
//makeItZero(43) //8 