// 219. Contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const numbers = [];
  for (let i = 0; i < nums.length; i++) {
      if (i > k) {
          numbers.shift();
      }
      
      if (numbers.includes(nums[i])) {
          return true;
      }

      numbers.push(nums[i]);
  }

  return false;
};