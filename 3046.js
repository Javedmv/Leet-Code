// 3046. Split the Array
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    const map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }
    for(let count of map.values()){
        if(count > 2){
            return false
        }
    }
    return true
};