const numJewelsInStones = function(J, S) {

    let count = 0;

    // console.log('Length: ' + J.length);

    for (let i = 0; i < J.length; i++){

        let latestIndex = 0;

        let letter = J[i];

        // console.log('Letter: ' + letter);

        while(latestIndex !== -1){

            latestIndex = S.indexOf(letter, latestIndex);

            if (latestIndex !== -1){

                latestIndex++;

                count++;

            }

        }

    }

    return count;

};

module.exports = numJewelsInStones;