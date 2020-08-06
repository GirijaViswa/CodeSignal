// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

// Example

// For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
// sumOfTwo(a, b, v) = true.

function sumOfTwo(a, b, v) {
    var ah = [];
 for(var x = 0; x < a.length; x++) {
    var i = v - a[x];
    ah[i] = a[x];
 }
 
 for(var y = 0; y < b.length; y++) {
    if(ah[b[y]] != null) {
       return true;
    }
 }
 return false;
}

// Test 1
// Input:
// a: [1, 2, 3]
// b: [10, 20, 30, 40]
// v: 42
// Expected Output:
// true

// Test 8
// Input:
// a: [6, 10, 25, 13, 20, 21, 11, 10, 18, 21]
// b: [21, 10, 6, 0, 29, 25, 1, 17, 19, 25]
// v: 37
// Expected Output:
// true