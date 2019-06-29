let timeSetOne = [[0, 30],[5, 10],[15, 20]];
let timeSetTwo = [[0,5],[6,10]];
let timeSetThree = [[3, 42],[42,49],[30,31]];
let timeSetFour = [[0, 30],[52, 59],[35, 50]]
let timeSetFive = [[6,10],[0,5]];

function canIAttendAll(timeSet) {
    let sortedTimeSet = sortMeetings(timeSet);
    for (let i = 0; i < sortedTimeSet.length-1; i++){
        if (timesOverlap(sortedTimeSet, i)){
            return false;
        }
    }
    return true;
}

let inputs = [timeSetOne, timeSetTwo, timeSetThree, timeSetFour, timeSetFive];

for (let i = 0; i < inputs.length; i++){
    console.log("Time Set " + (i+1) + ": " + canIAttendAll(inputs[i]));
}

// Helpers

function timesOverlap(sortedTimeSet, i) {
    return sortedTimeSet[i][1] > sortedTimeSet[i + 1][1];
}

function sortMeetings(array){
    for (let i = 0; i < array.length; i++){
        for (let u = 0; u < i; u++){
            if( array[u][0] > array[i][0]){
                let temp = array[i];
                array[i] = array[u];
                array[u] = temp;
            }
        }
    }
    return array;
}