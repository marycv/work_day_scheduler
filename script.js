
// DECLARE Current Day HTML Element
var currentDayEl = $('#currentDay');

// DECLARE the current time
var currentTime = moment().format('LLLL');

// Append the current date & time to 'currentDayEl'
currentDayEl.append(currentTime);

// DECLARE Time Entries Container HTML Element
var containerEl = $('#timeEntries');


// DECLARE current hour
var currentHour = moment().format('H');
    // Compare i to current hour to determine if this hour is in the past, present, or future
function currentTense() {
    for (var i = 8; i < 18; i++) {
        if (i > currentHour) {
            // change color of textarea to green;
            document.getElementById(i).classList.add('future');
            tense = 'future';
        } else if (i < currentHour) {
            // change color of text area to grey;
            document.getElementById(i).classList.add('past');
            tense = 'past';
        } else {
            // change color of text area to red;
            document.getElementById(i).classList.add('present');
            tense = 'present';
        }


    }
};

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