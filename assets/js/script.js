
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var current = $("#currentDay");

// var nineSlot = $('9').text();
// var tenSlot = $('#hour-10').children([0]).text();
// var elevenSlot = $('#hour-11').children([0]).text();
// var twelveSlot = $('#hour-12').children([0]).text();
// var oneSlot = $('#hour-1').children([0]).text();
// var twoSlot = $('#hour-2').children([0]).text();
// var threeSlot = $('#hour-3').children([0]).text();
// var fourSlot = $('#hour-4').children([0]).text();
// var fiveSlot = $('#hour-5').children([0]).text();


// var businessHours = [nineSlot, tenSlot, elevenSlot, oneSlot, twoSlot, threeSlot, fourSlot, fiveSlot];



// var nineAm = dayjs('09:00').format('hA');
// console.log(nineAm);



function displayCurrent () {
    var now = dayjs().format('ddd, MMM DD, hh:mm a')
    current.text(now);
    nowTime = dayjs().format('H');

    $('.time-block').each(function() {
        var theHour = $(this).attr('id').split("-")[1];
    
        if (nowTime < theHour) {
            $(this).addClass('future');


        } else if (nowTime == theHour) {
            $(this).addClass('present');


        } else if (nowTime > theHour) {
            $(this).addClass('past');
        }
    })
 
}

      

    

    
    

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //




displayCurrent();
$(function () {
});
  