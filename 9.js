// 9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x)
    let reverse = "";
    for(let i = str.length-1; i >= 0 ;i--){
        reverse += str[i];
    }
    console.log(reverse);
    if(reverse == x){
        return true;
    }
    return false
};