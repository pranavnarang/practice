let time = "19:34";
let time2 = "07:30";
let time3 = "18:39";
let time4 = "23:59"

function getEarliestTime(time){
    let num1 = time[0];
    let num2 = time[1];
    let num3 = time[3];
    let num4 = time[4];

    let min = findMin(num1, num2, num3, num4);
    
}

getEarliestTime(time);

// Helpers

function findMin(num1, num2, num3, num4){
    let min;
    if (num1 < num2){
        min = num1;
    } else {
        min = num2;
    }
    let min2;
    if (num3 < num4){
        min2 = num3
    } else {
        min2 = num4;
    }
    if (min < min2){
        return min;
    } else {
        return min2;
    }
}

console.log(findMin(1,4,2,0));
console.log(findMin(9,4,2,8));