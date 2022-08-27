function passByValue(value){
    value=value+10;
    return(value)
}
const num=99;
console.log("Num passing before function",num);
const result=passByValue(num)
console.log("Result",result)
console.log("Num passing before function",num);