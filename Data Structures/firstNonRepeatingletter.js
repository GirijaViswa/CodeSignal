// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

function firstNotRepeatingCharacter(s) {
    let arr = s.split('');
    if(arr.length < 1){
        return '_';
    }
    let obj = {};
    let resultArr = [];
    arr.forEach(letter => {
        if(obj[letter]){
            obj[letter] += 1;
        }
        else{
            obj[letter] = 1;
        }
    })
    arr.forEach(letter =>{
        if(obj[letter] === 1){
            resultArr.push(letter);
        }
    })
    if(resultArr.length <= 0){
        return '_';
    }
    else if(resultArr.length === 1){
        return resultArr[0];
    }
    let temp = arr.indexOf(resultArr[0])
    for(var i=1; i<=resultArr.length-1;i++){
        if(temp > arr.indexOf(resultArr[i])){
            temp = arr.indexOf(resultArr[i])
        }
    }
    console.log(temp,arr[temp])
    return arr[temp];
    
}
// Test 1
// Input:
// s: "abacabad"
// Expected Output:
// "c"

// Test 7
// Input:
// s: "zzz"
// Expected Output:
// "_"

// Input:
// s: "bcccccccb"
// Expected Output:
// "_"

// Test 3
// Input:
// s: "z"
// Expected Output:
// "z"