

function isPalindrome(str,i,j){
    //base condition
    //1.check if we are in center
    if(i==j){
        return true;
    }
    //2.check if values are not same
    if(str[i]!=str[j]){
        return false;
    }
    return isPalindrome(str,i+1,j-1)
}
//const str='malayalam'
const str='deepika'
//1.starting point
console.log(isPalindrome(str,0,str.length-1))