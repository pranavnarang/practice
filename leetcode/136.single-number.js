/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let map = new Map();

    // for (let i = 0; i < nums.length; i++){
    //     let num = nums[i];
    //     if (map.has(num)){
    //         map.delete(num);
    //     } else {
    //         map.set(num, 1);
    //     }
    // }

    // return (map.keys().next().value);

    let ans = 0;
    for (let i = 0; i < nums.length; i++){
        ans = ans ^ nums[i];
    }
    return ans;
    
};
// @lc code=end

