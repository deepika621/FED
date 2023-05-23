   
const result=[];//array result
const n=3;
let str="";
function generateParenthesis(str,left,right){
    //end position
    if(str.length==n*2){
        result.push(str);
        return;
    }
    //reaching towars end
    if(left!=n){
        generateParenthesis(str+"(",left+1,right);
    };
   if(right<left){
        generateParenthesis(str+")",left,right+1);
   }
}
//start position
generateParenthesis(str,0,0);
console.log(result);
