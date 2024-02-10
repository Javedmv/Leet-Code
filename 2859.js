// 2859. Sum of Values at Indices With K Set Bits

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let count = 0;
    let sum = 0;
    for(let i = 0 ;i < nums.length; i++){
        let binary = i.toString("2")
        for(let j = 0; j < binary.length ; j++){
            console.log(binary)
            if(binary[j] === "1"){
                count++
            }
        }
        if(count === k){
            sum += nums[i];
        }
        count = 0
    }
    return sum
};