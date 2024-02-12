// 2917. Find the K-or of an Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
    let ans = 0;

    for (let bit = 0; bit < 32; bit++) {
        let sum = 0;

        for (let num of nums) {
            if ((2 ** bit & num) === 2 ** bit) sum ++;
        }
        
        if (sum >= k) ans += 2 ** bit;
    }

    return ans;
};