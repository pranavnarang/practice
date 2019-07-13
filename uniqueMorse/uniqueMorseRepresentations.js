/*
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

    const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    const ALPHABET = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    let morseOutput = [];

    for (let i = 0; i < words.length; i++){
        let word = words[i];
        let wordMorse = "";
        for (let u = 0; u < word.length; u++){
            let char = word[u];
            let index = ALPHABET.indexOf(char);
            let morse = MORSE[index];
            wordMorse+=morse;
        }
        morseOutput.push(wordMorse);
    }
    
    let distinct = [...new Set(morseOutput)]
    console.log(distinct.length);

};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);