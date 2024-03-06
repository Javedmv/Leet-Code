//3038. Maximum Number of Operations With the Same Score
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let c = 0;
    let score = nums[0] + nums[1]
    while(true){
        if(nums.length < 2)return c;
        let ele = nums.shift();
        let ele2 = nums.shift();
        if(c == 0) c++;
        else{
            if(ele + ele2 !== score)return c;
            c++;
        }
    }
};