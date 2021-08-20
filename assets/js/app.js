// initialize luxon
const DateTime = luxon.DateTime;

// grab currentDay
const dt = DateTime.local();
const weekDay = dt.weekdayLong.toLowerCase();
$("#currentDay").text(weekDay);

// update greeting
const currentHour = dt.hour;
if(currentHour < 12) {
    $("#greeting").text('good morning')
} else if (12 <= currentHour < 18) {
    $("#greeting").text('good afternoon')
} else if (18 <= currentHour) {
    $("#greeting").text('good evening')
}

// add dates to tracker
const dayOfWeek = dt.weekday;
const month = dt.month;
const day = dt.day;
if(dayOfWeek === 1) {
    $("#1").text(`${month}/${day}`)
    $("#2").text(`${month}/${day+1}`)
    $("#3").text(`${month}/${day+2}`)
    $("#4").text(`${month}/${day+3}`)
    $("#5").text(`${month}/${day+4}`)
    $("#6").text(`${month}/${day+5}`)
    $("#7").text(`${month}/${day+6}`)
} else if (dayOfWeek !== 1) {
    for(let i =1; i < 8; i++ ){
        const difference = dayOfWeek - i;
        $("#"+ i).text(`${month}/${day - difference}`)
    }
} else {
    console.log('something is wrong :(')
}


// save new habit
const saveHabit = () =>  {
    const newHabit = $("textarea").val();
    let tableRowEl = $("<tr>");
    let tableRowHeaderEl = $("<th>").attr('scope', 'row').text(newHabit);
    tableRowEl.append(tableRowHeaderEl);
    for(let i=0; i < 7; i++) {
        const tableDataEl = $("<td>").addClass('text-center');
        const inputEl = $("<input>").addClass('form-check-input').attr('type', 'checkbox').attr('id', 'flexCheckDefault');
        tableDataEl.append(inputEl);
        tableRowEl.append(tableDataEl);
    }
    $("tbody").append(tableRowEl);
};

const addHabit = () => {
    // add text box
    const textBoxEl = $("<textarea>").addClass("my-1 col-4 mx-auto");
    const buttonDivEl = $("#buttonDiv").addClass("mb-3 flex-column").empty();
    buttonDivEl.append(textBoxEl);
    // add save button
    const saveButton = $("<button>").text('save.').addClass("btn btn-dark mx-auto col-4").attr('id', 'saveButton');
    buttonDivEl.append(saveButton);
    $("#saveButton").on("click", saveHabit);
};

// edit habit

// delete habit

// copywrite
const currentYear = dt.year;
$("#copywrite").text(currentYear);

// event listeners
$("#add-btn").on('click', function() {
    addHabit()
})