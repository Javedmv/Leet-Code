// 2937. Make Three Strings Equal

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    let n1 = s1.length;
    let n2 = s2.length;
    let n3 = s3.length;
    let i = 0;
    for(i = 0 ; i < Math.min(n1,n2,n3) ; i++){
        let e1 = s1[i];
        let e2 = s2[i];
        let e3 = s3[i];
        if(e1 !== e2) break;
        if(e2 !== e3) break;
    }
    if(i === 0)return -1;
    return (n1-i) + (n2-i) + (n3-i)
    }