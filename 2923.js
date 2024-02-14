// 2923. Find Champion I
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    let max = -Infinity;
    let max_i
    grid.map((arr,i)=>{
        var count = 0;
        console.log(arr)
        for(let nestedArr of arr){
            if(nestedArr === 1) count++
        }
        if(count > max){
            max = count;
            max_i = i
        }
    })
    return max_i
};