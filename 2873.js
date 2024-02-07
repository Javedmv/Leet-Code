// 2873. Maximum Value of an Ordered Triplet I

// You are given a 0-indexed integer array nums.
// Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.
// The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let max = 0;
        for(let i =0 ; i < nums.length ; i++){
            for(let j = i+1; j < nums.length;j++){
                for(let k = j+1; k < nums.length ;k++){
                    let sum = (nums[i]-nums[j])* nums[k];
                    if(sum > max){
                        max = sum;
                    }
                }
            }
        }
        return max;
};