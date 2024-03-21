// 220. Contains Duplicate III
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {

    let sortedNums = nums.map((num, index) => {
        return [num, index];
    });
    sortedNums.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    });

    let left = 0;
    let right = 1;

    while (left < right && right < nums.length) {
        let num1 = sortedNums[left];
        let num2 = sortedNums[right];

        let _indexDiff = Math.abs(num1[1] - num2[1]);
        let _numDiff = Math.abs(num1[0] - num2[0]);

        if (_indexDiff <= indexDiff && _numDiff <= valueDiff) return true;

        if (_numDiff > valueDiff) {
            left++;
            right = left + 1;
        } else if (_indexDiff > indexDiff) {
            right++;
        }
    }
    return false;
};