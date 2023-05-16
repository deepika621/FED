

function findFactorial(num){

    let result=1
    while(num>=1){
        result = result*num; //1*5=5 , 5*4=20 , 20*3=60, 60*2=120 ,120*1=120    
        num--;
    }
    console.log(result);
}
findFactorial(5)