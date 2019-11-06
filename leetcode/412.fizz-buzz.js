/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ans = [];
    for (let i = 1; i <= n; i++){
        if ((i % 3 === 0) && (i % 5 !== 0)){
            ans.push("Fizz");
        } else if ((i % 5 === 0) && (i % 3 !== 0)){
            ans.push("Buzz");
        } else if ((i % 3 === 0) && (i % 5 === 0)) {
            ans.push("FizzBuzz");
        } else {
            ans.push(i.toString());
        }
    }

    return ans;
    
};
// @lc code=end

