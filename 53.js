// 53. Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    for(let i = 1; i<nums.length; i++){
        nums[i] = Math.max(0,nums[i-1])+nums[i]
        if(nums[i] > sum){
            sum = nums[i]
        }
    }
    return sum;

};