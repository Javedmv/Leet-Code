// 2455. Average Value of Even Numbers That Are Divisible by Three
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

// Solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let nwArr = nums.filter((x) => x % 6 === 0);
    if(nwArr.length === 0)return 0
    if(nwArr.length === 1)return Number(nwArr[0])
    let sum = nwArr.reduce((acc,curr)=> acc + curr,0)
    return parseInt(sum/nwArr.length)
  };