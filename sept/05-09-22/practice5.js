function foo(n) {
    let p = 0;  //c1
    let q = 0;  //c2
    for(let i = 0; i < n; i++){ //n
        p = 0;  //c3*n
        for(let j = n; j > 1; j = j/2){  
            p++;  
            for(let k = 1; k < p; k *=2){  //logp
                q++;  //c5*(logp)
            }
        }
    }
}

//inner loop runs logp times here p=logn total inner loop will be executed is (log logn)
///second inner loop runs o(logn) times
//outer loop runs n times
//overall time complexity - O(nlog logn)