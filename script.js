
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
    var currentHour = moment().hours();
    
    // Create an array of the time-block divs
    var timeBlockArray = document.querySelectorAll('.time-block');
    
    for ( var i=0; i < timeBlockArray.length; i++) {
        // Declare variable to add class 'past', 'preset', or 'future' to the textArea
        var textArea = timeBlockArray[i].children[1];
        // Declare variable to pull the timeblock hour
        var timeBlock = timeBlockArray[i].id;
        
        if (timeBlock < currentHour) {
            textArea.classList.add('past');
        } else if (timeBlock === currentHour) {
            // change color of text area to red;
            textArea.classList.add('present');
            // timeBlock.addClass('present');
        } else {
            // change color of text area to green;
            textArea.classList.remove('past');
            textArea.classList.remove('present');
            textArea.classList.add('future');
        }
    };
}

currentTense();


// Set up a "click" event listener on the container
// button.on('click', function() {

// })
// containerEl.on("click", "[data-hour]", function(event) {

//     // Fetch the hour from the clicked button's (event.target) "data-hour" attribute


//     // Use the hour to create the key for local storage


//     // From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value
    
//     // Use the key and the value to save into localStorage

//     //localStorage.setItem('hour', key);
//     //localStorage.setItem('value', value);





// });