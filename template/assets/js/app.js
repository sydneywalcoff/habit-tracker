const buttonDivEl = $("#buttonDiv");
const habitsElArray = $('tbody tr th');

const addActionButtons = () => {
    buttonDivEl.empty();
    buttonDivEl.removeClass(['mb-3', 'flex-column']);
    const addBtn = $("<button>").addClass("btn btn-dark mx-1").text('add.').attr('id', 'add-btn');
    const editBtn = $("<button>").addClass("btn btn-dark mx-1").text('edit.').attr('id', 'edit-btn');
    const deleteBtn = $("<button>").addClass("btn btn-dark mx-1").text('delete.').attr('id', 'delete-btn');
    buttonDivEl.append(addBtn, editBtn, deleteBtn);
};


// save new habit
const addNewHabit = () =>  {
    const newHabit = $("textarea").val();
    let tableRowEl = $("<tr>");
    let tableRowHeaderEl = $("<th>").attr('scope', 'row').text(newHabit+':');
    tableRowEl.append(tableRowHeaderEl);
    for(let i=0; i < 7; i++) {
        const tableDataEl = $("<td>").addClass('text-center');
        const inputEl = $("<input>").addClass('form-check-input').attr('type', 'checkbox').attr('id', 'flexCheckDefault');
        tableDataEl.append(inputEl);
        tableRowEl.append(tableDataEl);
    }
    $("tbody").append(tableRowEl);
    // readd buttons
    addActionButtons();
};

const addHabitTextEl = () => {
    // add text box
    const textBoxEl = $("<textarea>").addClass("my-1 col-4 mx-auto");
    buttonDivEl.addClass("mb-3 flex-column").empty();
    buttonDivEl.append(textBoxEl);
    // add save button
    const saveButton = $("<button>").text('save.').addClass("btn btn-outline-dark mx-auto col-4").attr('id', 'save-add-button');
    buttonDivEl.append(saveButton);
    $("#save-add-button").on("click", addNewHabit);
};

// save habit
const saveHabit = () => {
    const habits = habitsElArray;
    const habitsInputEl = $('.habit-input');
    // if text input replace text
    for(let i=0; i < habits.length; i++) {
        const newHabit = habitsInputEl[i].value;
        let oldHabit = habitsInputEl[i].placeholder;
        const habitTextEl = $('<th>').attr('scope', 'row').text(newHabit);
        if(newHabit.length > 0) {
            // replace old habit with new habit
            console.log('oldHabit', oldHabit, 'newHabit', newHabit)
            if(oldHabit !== newHabit) {
                $(habitsInputEl[i]).replaceWith(habitTextEl.text(newHabit));
                return;
            }
        }
        $(habitsInputEl[i]).replaceWith(habitTextEl.text(oldHabit));
    }
    // replace save button with add/edit/delete buttons
    addActionButtons();
}

// edit habit
const editHabit = () => {
    // action buttons replaced by save button
    buttonDivEl.empty();
    const saveButton = $("<button>").text('save.').addClass("btn btn-outline-dark mx-auto col-4").attr('id', 'save-edit-button');
    buttonDivEl.append(saveButton);
    const habitsArray = habitsElArray.text().split(':');
    habitsArray.pop();
    for(let i =0; i < habitsArray.length; i++) {
        const currentHabit = habitsArray[i];
        const textInputEl = $('<input>').attr('type', 'text').addClass('p-1 habit-input').attr('placeholder', currentHabit);
        $(habitsElArray[i]).replaceWith(textInputEl);
        
    }
    $("#save-edit-button").on('click', saveHabit);
};


// delete habit

// copywrite
const currentYear = dt.year;
$("#copywrite").text(currentYear);

// event listeners
$("#add-btn").on('click', function() {
    addHabitTextEl()
});

$("#edit-btn").on('click', editHabit);