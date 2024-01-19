var currentDay = $("#currentDay");

var now = dayjs().format("dddd, DD  MMMM YYYY");
currentDay.text(now);
