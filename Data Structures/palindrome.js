// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.

function checkPalindrome(inputString) {
    let revStr = inputString.split('').reverse().join('')
    if(inputString == revStr){
        return true;
    }
    else{
        return false;
    }
}

// Input:
// inputString: "aabaa"
// Output:
// true
// Expected Output:
// true
// Console Output:
// Empty

// Input:
// inputString: "a"
// Output:
// true
// Expected Output:
// true
// Console Output:
// Empty