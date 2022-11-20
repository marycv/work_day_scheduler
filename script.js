
// DECLARE Current Day HTML Element
var currentDayEl = $('#currentDay');

// DECLARE the current time
var currentTime = moment().format('LLLL');

// Append the current date & time to 'currentDayEl'
currentDayEl.append(currentTime);

// DECLARE Time Entries Container HTML Element
var containerEl = $('#timeEntries');

    // Compare i to current hour to determine if this hour is in the past, present, or future
function currentTense() {
    // DECLARE current hour
    var currentHour = moment().format('H');
    // Time Block array
    
    var timeBlock = document.querySelectorAll('.time-block');
    
    var timeBlockArray = timeBlock[i];
    console.log(timeBlockArray);
    // Get textArea element to add tense
    var textArea = document.getElementById("textArea");

    for (i=8; i < timeBlockArray.length; i++)
        // for (var i = 8; i < 18; i++) {
        if (timeBlock < currentHour) {
            // change color of textarea to green;
            // timeBlock.addClass('past');
            textArea.classList.add('past');
        } else if (timeBlock === currentHour) {
            // change color of text area to grey;
            timeBlock.removeClass('past');
            timeBlock.addClass('present');
        } else {
            // change color of text area to red;
            timeBlock.removeClass('past');
            timeBlock.removeClass('present');
            timeBlock.addClass('future');
        }


};
// };

currentTense();


// Set up a "click" event listener on the container
containerEl.on("click", "[data-hour]", function(event) {

    // Fetch the hour from the clicked button's (event.target) "data-hour" attribute


    // Use the hour to create the key for local storage


    // From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value
    
    // Use the key and the value to save into localStorage

    //localStorage.setItem('hour', key);
    //localStorage.setItem('value', value);





});

    // Save an hour to local storage, this will be attached to click event listener