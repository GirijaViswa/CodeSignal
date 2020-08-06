// You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

// Put a single space between the words.
// Convert the uppercase letters to lowercase.
// Example

// For s = "CodesignalIsAwesome", the output should be
// amendTheSentence(s) = "codesignal is awesome";
// For s = "Hello", the output should be
// amendTheSentence(s) = "hello".


//easy way to do
amendTheSentence = s => s.replace(/([A-Z])/g,' $1').toLowerCase().trim()

function amendTheSentence(s) {
    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let newArr = [];
    let idxArr = [];
    var idx = 0;
    for(var a=0;a<s.length;a++){
        if(arr.includes(s[a])){
            if(idxArr[0] != 0){
                idxArr.push(0)
                idxArr.push(a)
            }
            else{
                idxArr.push(a)
            }
            
        }
    }
    for(var i=0;i<idxArr.length;i++){
        let word = s.substring(idxArr[i],idxArr[i+1])
        newArr.push(word.toLowerCase())
    }
    console.log(idxArr)
    
    console.log(newArr)
    if(newArr[0] == ''){
        newArr.shift()
    }
    console.log(newArr.join(' '));
    
    return newArr.join(' ');
}


// Test 3
// Input:
// s: "vSKwWDjwIerQKMgVaAniorRJlerbKpDgvyKBLPNwSRWtylqKewNFtERNuUBBHAsGkTSSfdhQHJYvAighAdeG"
// Expected Output:
// "v s kw w djw ier q k mg va anior r jlerb kp dgvy k b l p nw s r wtylq kew n ft e r nu u b b h as gk t s sfdh q h j yv aigh ade g"