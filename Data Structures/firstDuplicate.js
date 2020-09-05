// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// Example

// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

// For a = [2, 2], the output should be firstDuplicate(a) = 2;

// For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.
function firstDuplicate(a) {
for (let i of a) {
    let posi = Math.abs(i) - 1
    if (a[posi] < 0) return posi + 1
    a[posi] = a[posi] * -1
}
}


// console.log(firstDuplicate([2, 4, 3, 5, 1]))
// 
// function singleNumber(a){
//     let res = 0;
//     for(let num of a){
//         console.log('num',num)
//         console.log('res',res)
//         console.log('result',res^num)
//         res ^= num
//         if(res === 0){
//             console.log(num,'num')
//             return num
//         }
//     }
//     return res
// }
// console.log('hi',singleNumber([8,1,2,9,8,3,7,0]))

//Solution
// The requirements give a clue of how to solve this. The set of numbers contained in the array must match the following critera:

// only numbers in the range from 1 to a.length

// In other words, only positive numbers that are less than or equal to the length of the array. If the array contains ten numbers, none of them will be greater than 10.

// With that insight, we have a means of keeping track of numbers that we have already seen. We can treat the numbers themselves as indexes into the array, modify the element at that index (in this case by making it negative) and if we run into the same number and the element at that index is less than zero, then we know we have seen it.