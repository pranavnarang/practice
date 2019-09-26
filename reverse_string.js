let input_str = 'hi how are you doing';

var reverse_string = (input) => {
    let output_str = '';
    let length = input.length;
    for (let char in input){
        output_str+=input[length-char-1];
    }
    return output_str;
}

console.log(reverse_string(input_str));