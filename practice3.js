
function pattern(n){
    for(i=1;i<=n;i++){
        let star="";
        for(j=1;j<=(n-i);j++){
            star +=" ";
        }
            for(k=0;k<(2*i-1);k++){
                star +="*";
            }
   console.log(star);
    }
}
    
pattern(5);