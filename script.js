
// creating a string of time blocks 
var theDay = [
    {
        id: "zero",
        hour: "09",
        Time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "one",
        hour: "10",
        Time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "two",
        hour: "11",
        Time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "three",
        hour: "12",
        Time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "four",
        hour: "01",
        Time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "five",
        hour: "02",
        Time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "six",
        hour: "03",
        Time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "seven",
        hour: "04",
        Time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "eight",
        hour: "05",
        Time: "17",
        meridiem: "pm",
        reminder: "",
    }
]
$(document.ready(function () {
    // targeting the current date in header 
    var currentDate = moment().format("dddd, " + "MMMM Do YYYY");
    $('#currentDay').text(currentDate);

    console.log(currentDate)
}))
