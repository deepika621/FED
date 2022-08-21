function checknumber(num){
    switch(num){
        case(num>0):{
            console.log("positive number")
            break;
        }
        case(num<0):{
            console.log("negative number")
            break;
        }
        case(num==0):{
            console.log("zero")
            break;
        }
        default:
            console.log("lnvalid number")
    }}
checknumber(0)
checknumber(3)
checknumber(-5)
checknumber("abc")