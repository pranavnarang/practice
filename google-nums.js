// Problem [asked by 🏢 Google]:
// Find the starting and ending position of a given target value in array of integers nums sorted in ascending order.

// If the target is not found in the array, return [-1, -1].

// Your algorithm's runtime complexity must be in the order of O(log n)

// Example:
                      
//   Input: nums = [3,4,7,7,9,9,9,10], target = 9
//   Output: [4,6]
//   Input: nums = [3,4,7,7,9,9,9,10], target = 8
//   Output: [-1,-1]

// stub 
var findFirstAndLastIndexOfValue = (array, target) => {
    let maxIndex = -1;
    let count = 0;
    let found = false;

    array.map((num, index) => {
        if (num == target){
            // console.log('index: ' + index);
            // console.log('num: ' + num)
            maxIndex = index;
            count++;
            found = true;
        }
    });
    if (found){
        return [maxIndex-count+1,maxIndex];
    } 
    return [-1,-1];
}

console.log(findFirstAndLastIndexOfValue([3,4,7,7,9,9,9,10], 9));
console.log(findFirstAndLastIndexOfValue([3,4,7,7,9,10], 9));
console.log(findFirstAndLastIndexOfValue([3,4,7,7,9,9,9,10], 8));