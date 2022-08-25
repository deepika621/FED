//let l;
function mirrorPyramid(n){
for(let i=-n;i<=n;i++){
    let string=" "
    if(i<0){
        l=-i;
    }else{
        l=i;
    }
    for(let j=0;j<n-l;j++){
        string+=" ";
    }
    for(let k=1;k<l+1;k++){
        string+=k+" ";
    }
    console.log(string);
    }}
    mirrorPyramid(7)