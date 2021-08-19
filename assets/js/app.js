// initialize luxon
const DateTime = luxon.DateTime;

// grab currentDay
const dt = DateTime.local();
const weekDay = dt.weekdayLong;
console.log(weekDay)
$("#currentDay").text(weekDay)



// if()
// $("#greeting")

