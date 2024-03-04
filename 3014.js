// Code
// 3014. Minimum Number of Pushes to Type Word I
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let n = word.length;
    if(n <= 8) return n;
    if(n <= 16 ) return 8+2*(n-8);
    else if(n <= 24) return 8+16+3*(n-8)
    else if(n <= 32) return 8+16+24+4*(n-8);
};