// 152. Maximum Product Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let res = nums[0];
  
    for(let i = 1; i < nums.length; i++){
      const temp = max;
      max = Math.max(nums[i] * max, nums[i] * min, nums[i]);
      min = Math.min(nums[i] * temp, nums[i] * min, nums[i]);
      console.log(min, max)
      res = Math.max(max, res);
    }
    return res;
  };