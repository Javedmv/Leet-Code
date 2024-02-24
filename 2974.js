// 2974. Minimum Number Game
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b) => b-a);
    const arr = [];
    while(nums.length){
        const alice = nums.pop();
        const bob = nums.pop();
        arr.push(bob,alice);
    }
    return arr;

};