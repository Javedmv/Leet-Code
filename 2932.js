// 2932. Maximum Strong Pair XOR I

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    let max = 0;
    let len = nums.length;

    for(let i = 0; i < len; i++){
        let numI = nums[i];

        let j = i;

        while(j < len){
            let numsJ = nums[j]
            if(Math.abs(numI - numsJ) <= Math.min(numI,numsJ)){
                let xor = numI ^ numsJ;

                if(xor > max){
                    max = xor;
                }
            }
            j++;
        }   
    }
    return max;
};