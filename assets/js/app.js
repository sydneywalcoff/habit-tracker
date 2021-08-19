// initialize luxon
const DateTime = luxon.DateTime;

// grab currentDay
const dt = DateTime.local();
const weekDay = dt.weekdayLong.toLowerCase();
$("#currentDay").text(weekDay)


// update greeting
const currentHour = dt.hour;

if(currentHour < 12) {
    $("#greeting").text('good morning')
} else if (12 <= currentHour < 18) {
    $("#greeting").text('good afternoon')
} else if (18 <= currentHour) {
    $("#greeting").text('good evening')
}

// copywrite
const currentYear = dt.year;
$("#copywrite").text(currentYear);