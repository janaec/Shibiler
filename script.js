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
// targeting the current date in header 
function getHeader() {
    var currentDate = moment().format('dddd,MMMM Do');
    $("#currentDay").text(currentDate);
}
function displayReminders(){
   localStorage.setItem("theDay", JSON.stringify(theDay));
    }
function InIt() {
    var storedDay = JSON.parse(localStorage.getItem("theDay"));
    if (storedDay) {
        thisDay= storedDay;
    }
    displayReminders();
}
var Data= 
