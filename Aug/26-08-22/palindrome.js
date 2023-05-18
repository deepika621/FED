

function checkPalindrome(str){
    let l=0;
    let h=str.length-1;
    //base condition
    if(str[l]==str[h]){
        return true;
    }
    if(str[l++] != str[h--]){
        return false;
    }
    return checkPalindrome(str[l++],str[h--])
}
const str= 'malayalam'
//const str='deepika'
//starting point.
console.log(checkPalindrome(str));

