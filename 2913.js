// 2913. Subarrays Distinct Element Sum of Squares I

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let result = 0;
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1; j <= nums.length; j++){
            const singleValue = new Set(nums.slice(i,j)).size
            result += Math.pow(singleValue,2)
        }
    }
    return result
};