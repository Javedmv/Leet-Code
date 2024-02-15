// 2928. Distribute Candies Among Children I
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let way = 0;
    for(let i = 0; i <= limit;i++){
        for(let j = 0 ; j <= limit ;j++){
            for(let k = 0 ; k <= limit ;k++){
                if(i+k+j == n){
                    way++
                }
            }
        }
    }
    return way
};