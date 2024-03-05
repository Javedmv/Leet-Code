// 3042. Count Prefix and Suffix Pairs I
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let count = 0;
    for(let i = 0 ; i < words.length ; i++){
        for(let j = i+1 ; j < words.length ; j++){
            const s = words[i];
            const t = words[j];
            if(t.startsWith(s) && t.endsWith(s)){
                count++;
            }
        }
    }
    return count;
};