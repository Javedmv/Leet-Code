// 2956. Find Common Elements Between Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let n = 0;
    let m = 0;
    for(let i = 0; i < nums1.length;i++){
            if(nums2.includes(nums1[i])){
                n++;
        }
    }
    for (let k = 0 ; k < nums2.length;k++){
        if(nums1.includes(nums2[k])){
            m++;
        }
    }
    return [n,m]
};