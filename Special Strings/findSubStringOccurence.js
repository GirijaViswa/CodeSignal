// Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

// Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.

// Example

// For s = "CodefightsIsAwesome" and x = "IA", the output should be
// strstr(s, x) = -1;
// For s = "CodefightsIsAwesome" and x = "IsA", the output should be
// strstr(s, x) = 10.

function findFirstSubstringOccurrence(s, x) {
    const ans = s.split(x)
    if(ans.length > 1) {
        return ans[0].length
    }
    return -1
}

or 

function strstr(s, x) {
    // for(var i=0;i<x.length;i++){
        
    // }
    if((x.length == 0) || (s.length == 0)){
        return -1;
    }
    if(x.length <= s.length){
        if(s.includes(x)){
        return s.indexOf(x)
    }
    else {
    return -1;
    }
    }
    
}

Input:
s: "CodefightsIsAwesome"
x: "IsA"
Expected Output:
10

Test 3
Input:
s: "a"
x: "a"
Expected Output:
0

Test 4
Input:
s: "a"
x: "A"
Expected Output:
-1