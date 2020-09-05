// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.

// Constraints

//  where 
// Output Format

// Return the total number of matching pairs of socks that John can sell.

// Sample Input

// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output

// 3

function sockMerchant(n, ar) {
    let sameColorSocks = {};
    let pairs = 0;
    ar.forEach(sock => {
        if(sameColorSocks[sock]){
            sameColorSocks[sock] += 1
        }
        else{
            sameColorSocks[sock] = 1
        }
    })
    console.log(sameColorSocks)
    // ar.forEach(sock => 
    for(let sock in sameColorSocks)
        {
        console.log('sock',sock)
        if(sameColorSocks[sock] >= 2){
            if(sameColorSocks[sock] == 2){
                console.log('pairs = 2',pairs)
                pairs += 1;
            }
            else {
                let temp = sameColorSocks[sock];
                console.log('temp',temp)

                while(temp >= 2){
                console.log('inside while temp',temp)

                    if(temp % 2 == 0){
                        pairs += 1;
                console.log('pairs != 2',pairs)
                

                    }
                    temp = temp - 1
                }
            }
        }
    }
    console.log('pairs',pairs)
    return pairs;
}


 sockMerchant(9, [10,20,20,10,10,30,50,10,20]) 
