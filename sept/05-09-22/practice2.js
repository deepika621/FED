function foo(n){
    for(let i=2;i<=Math.sqrt(n);++i){  //sqrt(n) 
        if(n%i==0){
            return false;
        }
    }
    return true;
}
//sqrt(n)
//worst case time complexity-O(sqrt(n))
