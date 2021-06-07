//Variables
var currentDate = new Date();
var christmasDate = new Date(2021, 12, 25);
var newYearDate = new Date(2022, 01, 01);
var valentinesDate = new Date(2022, 02, 14);

//Logic for calculating dates
var daysUntilChristmas = parseInt(
  (christmasDate - currentDate) / (24 * 3600 * 1000)
);
var daysUntilNewYear = parseInt(
  (newYearDate - currentDate) / (24 * 3600 * 1000)
);
var daysUntilValentines = parseInt(
  (valentinesDate - currentDate) / (24 * 3600 * 1000)
);

//Event Listeners
$("#trigger").on("click", appendChristmas);
$("#trigger").on("click", appendNewYear);
$("#trigger").on("click", appendValentines);

//Functions
function appendChristmas() {
  $("#days-until").append(
    "<li>" + daysUntilChristmas.toString() + " days until Christmas</li>"
  );
}
function appendNewYear() {
  $("#days-until").append(
    "<li>" + daysUntilNewYear.toString() + " days until New Year</li>"
  );
}
function appendValentines() {
  $("#days-until").append(
    "<li>" + daysUntilValentines.toString() + " days until Valentines Day</li>"
  );
}
