function sumtodigits(num){
    var str=num.toString()
    if(num.toString().length<3){
        console.log(-1); 
        return;
    }
        let sum=0;
        for(let i=1;i<str.length-1;i++){
            sum+=Number(str[i])}
            console.log(sum);
}
sumtodigits(2124)
sumtodigits(70)
sumtodigits(12341)
sumtodigits(121)