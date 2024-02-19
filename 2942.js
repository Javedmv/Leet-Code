// 2942. Find Words Containing Character
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let indices = [];
    for(let i = 0 ; i < words.length ; i++){
        for(let char of words[i]){
            if(x === char){
                indices.push(i);
                break;
            }
        }
    }
    return indices;
};