/******************************
 *   Global Variables.  
******************************/
var currentDay = $("#currentDay");
var container = $(".container");


// Set variable with current date
var now = dayjs().format("dddd, DD  MMMM YYYY");
currentDay.text(now); // Set text as current date

console.log(dayjs().hour());

// function to create a time slot for each hour between 9am and 5pm.
function createTimeSlot() {
    var timeBLock = $(`
    <div class="row time-block">
        <div class="col-2 hour">
            9 AM
        </div>
        <div class="col-9"></div>
        <button type="submit" class="col-1 saveBtn"><i class="fa-solid fa-floppy-disk"></i></button>
    </div>`)

    container.append(timeBLock);
}

createTimeSlot();
