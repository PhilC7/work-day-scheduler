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
        <div class="row time-block">
            <div class="col-2 hour">
                ${time}
            </div>
            <textarea class="col-9 ${checkedTime}"></textarea>
            <button type="submit" class="col-1 saveBtn"><i class="fa-solid fa-floppy-disk"></i></button>
        </div>`)
    container.append(timeSlot); // append time slot to container div.
});


