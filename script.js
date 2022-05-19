// time block variables
var block9am = $("#9am");
var block10am = $("#10am");
var block11am = $("#11am");
var block12pm = $("#12pm");
var block1pm = $("#1pm");
var block2pm = $("#2pm");
var block3pm = $("#3pm");
var block4pm = $("#4pm");
var block5pm = $("#5pm");

// text area variables
var ta9am = $("#ta9am");
var ta10am = $("#ta10am");
var ta11am = $("#ta11am");
var ta12pm = $("#ta12pm");
var ta1pm = $("#ta1pm");
var ta2pm = $("#ta2pm");
var ta3pm = $("#ta3pm");
var ta4pm = $("#ta4pm");
var ta5pm = $("#ta5pm");

// load from local storage
ta9am.val(localStorage.getItem("plan9am"));
ta10am.val(localStorage.getItem("plan10am"));
ta11am.val(localStorage.getItem("plan11am"));
ta12pm.val(localStorage.getItem("plan12pm"));
ta1pm.val(localStorage.getItem("plan1pm"));
ta2pm.val(localStorage.getItem("plan2pm"));
ta3pm.val(localStorage.getItem("plan3pm"));
ta4pm.val(localStorage.getItem("plan4pm"));
ta5pm.val(localStorage.getItem("plan5pm"));

// Show current day
$("#currentDay").text(function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, 0);
    var mm = String(today.getMonth() + 1).padStart(2, 0);
    var yyyy = today.getFullYear();

    return today = mm + '/' + dd + '/' + yyyy;
})

// updates the color coding of the time blocks
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

// save text area content to local storage
block9am.on("click", ".saveBtn", function() {
    localStorage.setItem("plan9am", ta9am.val());
})

block10am.on("click", ".saveBtn", function() {
    localStorage.setItem("plan10am", ta10am.val());
})

block11am.on("click", ".saveBtn", function() {
    localStorage.setItem("plan11am", ta11am.val());
})

block12pm.on("click", ".saveBtn", function() {
    localStorage.setItem("plan12pm", ta12pm.val());
})

block1pm.on("click", ".saveBtn", function() {
    localStorage.setItem("plan1pm", ta1pm.val());
})

block2pm.on("click", ".saveBtn", function() {
    localStorage.setItem("plan2pm", ta2pm.val());
})

block3pm.on("click", ".saveBtn", function() {
    localStorage.setItem("plan3pm", ta3pm.val());
})

block4pm.on("click", ".saveBtn", function() {
    localStorage.setItem("plan4pm", ta4pm.val());
})

block5pm.on("click", ".saveBtn", function() {
    localStorage.setItem("plan5pm", ta5pm.val());
})

// updating color coding
updateTimeBlock($("#9am"), 9);
updateTimeBlock($("#10am"), 10);
updateTimeBlock($("#11am"), 11);
updateTimeBlock($("#12pm"), 12);
updateTimeBlock($("#1pm"), 13);
updateTimeBlock($("#2pm"), 14);
updateTimeBlock($("#3pm"), 15);
updateTimeBlock($("#4pm"), 16);
updateTimeBlock($("#5pm"), 17);
