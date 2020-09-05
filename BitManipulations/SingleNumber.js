// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
// You are given an array of integers in which every element appears twice, except for one. Find the element that only appears one time. Your solution should have a linear runtime complexity (O(n)). Try to implement it without using extra memory.

// Example

// For nums = [2, 2, 1], the output should be
// singleNumber(nums) = 1.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer nums

// Guaranteed constraints:
// 1 ≤ nums.length < 104,
// -109 ≤ nums[i] ≤ 109.

// [output] integer

function singleNumber(nums) {
    'use strict'
    let res = -1;
    for (let num of nums) {
      console.log('num',num)
      console.log('res',res)
      console.log('res',res ^num)
        res ^= num;
    }
    return res;
  }

//   Input:
// nums: [2, 2, 1]
// Output:
// 1
// Expected Output:
// 1
// Console Output:
// Empty

// Input:
// nums: [1]
// Output:
// 1
// Expected Output:
// 1
// Console Output:
// Empty

console.log(singleNumber([8,1,2,4,8,9,9]))