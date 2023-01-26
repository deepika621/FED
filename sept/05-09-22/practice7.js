function foo(n) {
    let count = 0;
    for(let i = n; i > 0; i = i/2){  //logn
        for(let j = 0; i < p; j++){  //n
            count += 1;
        }
    }
    return count;
}

//T(n) = nlogn
//S(n) = 1

function foo(n){
    if(n < 2){
        return n;
    }
    return fibonacci(n - 1)+fibonacci(n - 2)
}

//Time Complexity - 2^n
//Space Complexity - O(n)