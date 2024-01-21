/******************************
 *   Global Variables.  
******************************/
var currentDay = $("#currentDay");
var container = $(".container");
var currentHour = dayjs().hour(); // variable to display hour - i.e. 9 AM


// Set variable with current date
var todaysDate = dayjs().format("dddd, DD  MMMM YYYY");
currentDay.text(todaysDate); // Set text as current date


//set array for hours of a working day
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// function to check time and assign the correct class
var timeCheck = function (element) {
    if (element < currentHour) {
        return "past";
    } else if (currentHour === element) {
        return "present";
    } else if (element > currentHour) {
        return "future";
    }
}

// for each loop to create time slots
hour.forEach(element => {
    var time = dayjs().hour(element).format("h A"); // set format of time.
    var checkedTime = timeCheck(element); // variable to pass time from timeCheck function

    // create a time slot for each hour.
    var timeSlot = $(`
        <div data-timeslot class="row time-block">
            <div class="col-2 hour">${time}</div>
            <textarea name="text" class="col-9 ${checkedTime}"></textarea>
            <button type="submit" class="col-1 saveBtn"><i class="fa-solid fa-floppy-disk"></i></button>
        </div>`)
    container.append(timeSlot); // append time slot to container div.
});

// event listener to save input
var save = $(".saveBtn");
save.on("click", saveToLocalStorage) // save inputs when button is clicked 


// Function to save data to local storage
function saveToLocalStorage() {
    var textInput = $('textarea'); // set variable for textarea

    // for each textarea, create a key: value pairing
    textInput.each(function (index) {
        var key = "hour-" + hour[index];
        var value = $(this).val();
        localStorage.setItem(key, value); //set local storage
    });
}

// Function to load data from local storage
function loadFromLocalStorage() {
    var textInput = $('textarea');// set variable for textarea

    // for each textarea to get any existing data
    textInput.each(function (index) {
        var key = "hour-" + hour[index];
        var value = localStorage.getItem(key); // get data and set the value.
        $(this).val(value);
    });
}
// call function to pre-load any existing data from local storage.
loadFromLocalStorage();
