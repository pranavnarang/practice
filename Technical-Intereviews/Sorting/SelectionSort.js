let unsorted_array = [1,4,2,9,0,5,8,3];

var selection_sort = (unsorted_array) => {
    for (let i = 0; i < unsorted_array.length; i++){
        let min = i;
        for (let j = i+1; j < unsorted_array.length; j++){
            if (unsorted_array[j] < unsorted_array[min]){
                min = j;
            }
        }
        let temp = unsorted_array[i];
        unsorted_array[i] = unsorted_array[min];
        unsorted_array[min] = temp;
    }
    return unsorted_array;
}

console.log(selection_sort(unsorted_array)); // [ 0, 1, 2, 3, 4, 5, 8, 9 ]