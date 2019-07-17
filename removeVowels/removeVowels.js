/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
*/

function removeVowels(str){
    let vowels = ['a','e','i','o','u',];
    let lowerCaseStr = str.toLowerCase();
    let result = '';

    for (let i = 0; i < str.length; i++){
        let char = lowerCaseStr[i];
        if(vowels.indexOf(char) === -1){
            result+=char;
        }
    }

    console.log(result);
}

removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')