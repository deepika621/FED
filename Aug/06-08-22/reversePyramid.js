
function reversePyramid(n){
    for(let i=1;i<=n;i++){
        let string=" "
        for(let j=1;j<=i;j++){
            string+=" ";
        }
        for(let k=i;k<=n;k++){
            string+=k+" ";
        }
    console.log(string)
    }
}
reversePyramid(7)