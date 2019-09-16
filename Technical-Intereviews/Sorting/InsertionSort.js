let unsorted_array = [3,2,5,1,4,9,7]

var insertion_sort = (input_array) => {
    for (let i = 0; i < input_array.length; i++){
        let temp = input_array[i];
        let pos = i;
        while (pos > 0 && input_array[pos-1] > temp){
            input_array[pos] = input_array[pos-1]
            pos--;
        }
        input_array[pos] = temp;
    }
    return input_array
}

console.log(insertion_sort(unsorted_array));