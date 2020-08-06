// Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

// Example

// For a = [1, 2, 3, 1], the output should be
// containsDuplicates(a) = true.

// There are two 1s in the given array.

// For a = [3, 1], the output should be
// containsDuplicates(a) = false.

// The given array contains no duplicates.

function containsDuplicates(a) {
    let obj = {};
    a.forEach(ele => {
        if(obj[ele]){
            obj[ele] += 1;
        }
        else{
            obj[ele] = 1;
        }
    })
    for( let ele in obj){
        if(obj[ele] > 1){
            return true;
        }
    }
    return false;
}

// Test 1
// Input:
// a: [1, 2, 3, 1]
// Expected Output:
// true

// Test 4
// Input:
// a: []
// Expected Output:
// false

// Input:
// a: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Expected Output:
// true

// Test 2
// Input:
// a: [3, 1]
// Expected Output:
// false