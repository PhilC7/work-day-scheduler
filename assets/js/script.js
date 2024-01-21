/******************************
 *   Global Variables.  
******************************/
var currentDay = $("#currentDay");
var container = $(".container");
var currentHour = dayjs().format("h A"); // variable to display hour - i.e. 9 AM


// Set variable with current date
var todaysDate = dayjs().format("dddd, DD  MMMM YYYY");
currentDay.text(todaysDate); // Set text as current date


// function to create a time slot for each hour between 9am and 5pm.
function createTimeSlot() {
    // for loop to create time slot block for each hour.
    for (let hour = 9; hour <= 17; hour++) {
        var time = dayjs(`2024 ${hour}`).format("h A");
        var timeBLock = $(`
        <div class="row time-block">
            <div class="col-2 hour">
                ${time}
            </div>
            <textarea class="col-9"></textarea>
            <button type="submit" class="col-1 saveBtn"><i class="fa-solid fa-floppy-disk"></i></button>
        </div>`)
        container.append(timeBLock);
    }
}


createTimeSlot();

// save button test
var save = $(".saveBtn");
save.on("click", function () {
    console.log("Saved");
})
