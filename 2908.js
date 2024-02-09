// 2908. Minimum Sum of Mountain Triplets I
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let sum = 0;
    let arr = [];
    for(let i = 0 ; i< nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k = j+1;k<nums.length;k++){
                if(nums[i] < nums[j] && nums[k]< nums[j]){
                    console.log(nums[i],nums[j],nums[k])
                    sum += (nums[i] + nums[j] + nums[k])
                    arr.push(sum)
                    sum = 0;
                }
            }
        }
    }
    arr.sort((a,b)=>a-b)
    console.log(arr)
    return arr[0] ?? -1
};