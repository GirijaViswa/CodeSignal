Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

var runningSum = function(nums) {
    let arr = [nums[0]]
    for(var i=1;i<=nums.length-1;i++){
        let temp = arr[arr.length-1]
        arr.push(temp+nums[i])
        console.log(arr)
    }
    return arr;
};