var canIAttendAll = (timeSet) => {
    let sortedTimeSet = sortMeetings(timeSet);
    for (let i = 0; i < sortedTimeSet.length-1; i++){
        if (timesOverlap(sortedTimeSet, i)){
            return false;
        }
    }
    return true;
}

// Export Statements for Testing

module.exports = canIAttendAll;

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