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
    ar.forEach(sock => {
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
    })
    console.log('pairs',pairs)
}
