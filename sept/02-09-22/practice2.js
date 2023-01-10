
function foo(n,m){
    let a=0;  //c1
    for(let i=0; i<n; i++){   //n
        a+=i; //c2(n-1)
    } 
    let b=0;  //c3
    for(let i=0; i<m; i++){  //m
        b+=i; //c4(m-1)
    }
    console.log(a,b)
}

//c1+c2(n-1)+c3+c4(m-1)
//c1+c2n-c2+c3+c4m-c4
//c2n+c4m
//n+m
//T(n,m)=O(n+m)=O(n)+O(m)
foo(4,5);
foo(10,20);