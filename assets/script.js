// Establish date and time
var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

// store in local storage
var tasks = {
    "hour1": [],
    "hour2": [],
    "hour3": [],
    "hour4": [],
    "hour5": [],
    "hour6": [],
    "hour7": [],
    "hour8": [],
};
console.log(tasks);

var getTasks = function() {
    var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
}


getTasks();

// save button
$(".saveBtn").click(function() {
    replaceTextarea($(this));
})