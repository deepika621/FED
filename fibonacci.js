function fibonacci(num){
    let f1,f2,f3;
    f1=0;
    f2=1
    for(let i=3;i<num;i++){
        f3=f1+f2;
        f1=f2;
        f2=f3;
        console.log(f3);
    }
}
fibonacci(5)
fibonacci(8)