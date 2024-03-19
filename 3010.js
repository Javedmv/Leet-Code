// 3010. Divide an Array Into Subarrays With Minimum Cost I
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let sum = nums[0];
    nums.shift();
    nums.sort((a,b) => a-b);
    sum += nums[0];
    sum += nums[1];
    return sum
};