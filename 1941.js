// 1941. Check if All Characters Have Equal Number of Occurrences


/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const unique = [];
    const cache = {};
    let result =false;
    for(let i = 0 ; i < s.length;i++){
        if(cache[s[i]]) cache[s[i]] +=1
        else{
            cache[s[i]] = 1;
            unique.push(s[i]);
        }
    }
    const occurance = cache[s[0]];
    for(let i = 0 ; i< unique.length ;i++){
        if(cache[unique[i]] !== occurance){
            result = false;
            break;
        }else{
            result = true
        }
    }
    return result;

};