
// creating a string of time blocks 
var theDay = [
    {
        id: "zero",
        hour: "09",
        hr: 9,
        Time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "one",
        hour: "10",
        hr: 10,
        Time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "two",
        hour: "11",
        hr: 11,
        Time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "three",
        hour: "12",
        hr: 12,
        Time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "four",
        hour: "01",
        hr: 13,
        Time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "five",
        hour: "02",
        hr: 14,
        Time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "six",
        hour: "03",
        hr: 15,
        Time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "seven",
        hour: "04",
        hr: 16,
        Time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "eight",
        hour: "05",
        hr: 17,
        Time: "17",
        meridiem: "pm",
        reminder: "",
    }
]
$(document).ready(function () {
    // targeting the current date in header 
    var currentDate = moment().format("MM-DD-YYYY");
    $('#currentDay').text(currentDate);
    theDay.map(function (hour) {
        var thisHour = parseInt(moment().format('h'));
        console.log(thisHour, hour.hr)
        if (thisHour < hour.hr) {
            $(`#${hour.id}`).addClass("past")
        }
        else if (thisHour === hour.hr) {
            $(`#${hour.id}`).addClass("present")
        }
        else (thisHour)
        $(`#${hour.id}`).addClass("future")
    })

    // console.log(currentDate)
    var saveButton = $("<i class=' far fa-save-fa-lg'></i>");
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
        },
            savePlan.append(saveButton),

    )})
