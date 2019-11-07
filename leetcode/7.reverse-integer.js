/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    if(Math.abs(x) > Math.pow(2,31)-1){
        return 0;
    }

    let length = x.toString().length;

    let isNegative = x > 0 ? false : true;

    if (isNegative){
        length--;
        x = Math.abs(x);
    }
    
    console.log(length);
    console.log(isNegative);
    let ans = 0;

    for (let i = 1; i <= length; i++){
        let digit = Math.floor((x%(Math.pow(10,i)))/Math.pow(10,i-1));
        ans += digit * Math.pow(10, length-i);
    }

    if (isNegative){
        ans = 0 - ans;
    }

    return ans;

    // 123 % 10 = 3 / 1 = 3; , i = 1
    // 123 % 100 = 23 / 10 = 2.3 = 2;, i = 2
    // 123 % 1000 = 123 / 100 = 1.23 = 1;, i = 3

    // 3 * 10^2 i = 1, l = 3
    // 2 * 10^1 i = 2, l = 3
    // 1 * 10^0 i = 3, l = 3

    // 120 % 10 = 0 / 1 = 0;
    // 0 * 100 

    // 120 % 100 = 20/10 = 2
    // 2*10

    
};
// @lc code=end

