// 217. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let count = {};
    for(let i = 0 ; i < nums.length ; i++){
        if(Object.hasOwn(count,nums[i])){
            count[nums[i]] += 1
            return true;
        }else{
            count[nums[i]] = 1
        }
    }
    return false;
};