function foo(n){
    let k=1; //c1
    if(n && !(n & (n-1))){
        return n;
    }
    while(k < n){
        k <<= 1;
    }
    return k;
}