/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ds = {};

    for (let num of nums){
        if(ds[num]!=undefined){
            ds[num]++;
        }else{
            ds[num]=1;
        }
    }

    for (let num of nums){
        if(ds[num]>Math.floor(nums.length/2)){
            return num;
        }
    }


};
// @lc code=end

majorityElement([1,2,3,3,3]);