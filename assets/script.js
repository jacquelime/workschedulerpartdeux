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
    if (loadedTasks) {
        tasks = loadedTasks
        $.each(tasks, function(hour, task) {
            var hourDiv = $("#" + hour);
            createTask(task, hourDiv);
        })
    }
    auditTasks()
}

getTasks();

// save button
$(".saveBtn").click(function() {
    replaceTextarea($(this));
})

// Save tasks after refresh