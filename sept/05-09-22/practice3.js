function foo(n){
    let a=0;   //c1
    if(n==0){
        a=2;  //c2
    }else{
        a=2*foo(n-1);  //c3*n
    }
    bar(a);
    return a;
}
function bar(m){
    for(let i=m;i>1;i/=2);  //logn
}

//n*logn
//nlogn