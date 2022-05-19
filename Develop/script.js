// Show current day
$("#currentDay").text(function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, 0);
    var mm = String(today.getMonth() + 1).padStart(2, 0);
    var yyyy = today.getFullYear();

    return today = mm + '/' + dd + '/' + yyyy;
})

var updateTimeBlock = function(timeBlock, timeBlockHour) {
    var today = new Date();
    var hour = today.getHours();

    if(timeBlockHour === hour) {
        timeBlock.addClass("present")
    }
    else if(timeBlockHour < hour) {
        timeBlock.addClass("past")
    }
    else {
        timeBlock.addClass("future");
    }
}

updateTimeBlock($("#9am"), 9);
updateTimeBlock($("#10am"), 10);
updateTimeBlock($("#11am"), 11);
updateTimeBlock($("#12pm"), 12);
updateTimeBlock($("#1pm"), 13);
updateTimeBlock($("#2pm"), 14);
updateTimeBlock($("#3pm"), 15);
updateTimeBlock($("#4pm"), 16);
updateTimeBlock($("#5pm"), 17);
