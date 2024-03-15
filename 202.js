/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // Helper function to calculate the sum of squares of digits
    function digitSquareSum(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // Use Floyd's Cycle Detection Algorithm (slow and fast pointers)
    let slow = n;
    let fast = n;
    do {
        slow = digitSquareSum(slow);
        fast = digitSquareSum(digitSquareSum(fast));
    } while (slow !== fast);

    // If the cycle ends at 1, n is a happy number
    return slow === 1;
};