// javascript code is wrapped in jQuery function in order to allow for DOM to load before functions kick-off
$(function () {

    // reference to html element that displays the current time
    var current = $("#currentDay");



    // main function powers the majority of the app
    function displayCurrent() {

        // sets var for current date in time in specified format
        var now = dayjs().format('ddd, MMM DD, hh:mm a')

        // adds current date and time to HTML element
        current.text(now);

        //separate var calls for current time in 24-hr format.
        nowTime = dayjs().format('HH');

        //Each function loops hour-block containers by id  
        $('.time-block').each(function () {
            //var creates array by splitting id by '-' to grab number (string)
            var theHour = $(this).attr('id').split("-")[1];

            //checks number string each loop against the current 24-hr time. Adds class depending on number relative to current time
            if (nowTime < theHour) {
                $(this).addClass('future');


            } else if (nowTime == theHour) {
                $(this).addClass('present');

                //placeholder text to further emphasize which hour block is 'Now', in case user does not inuit this through the red color
                $(this).children(".description").attr('placeholder', '...Current hour');
                $(this).children('.description').addClass('dim-font-placeholder');



            } else if (nowTime > theHour) {
                $(this).addClass('past');

            }
        })

    }
    // runs function declared above
    displayCurrent();


    // click event save buttons at each hour block.
    $('.saveBtn').click(function (event) {
        event.preventDefault();

        //references text entered in the textarea element 
        var inputReminder = $(this).siblings('.description').val();

        // grabs the number (string) using split method
        var hour = $(this).parent().attr('id').split('-')[1];

        //saves to local storage only if not empty string (null). Includes class for success alert
        if (inputReminder !== '') {
            localStorage.setItem(hour, inputReminder);
            $('#confirm-save').removeClass('hide');
            $('#confirm-save').addClass('alert alert-success');
            $('#confirm-reset').addClass('hide');

        //window alert if button is clicked with no text input
        } else {
            $('#confirm-save').addClass('hide');
            window.alert('You need to enter an event before saving!')
        }


    })


    // recalls data from local storage and places value in corresponding hour block
    $('#hour-09 .description').val(localStorage.getItem('09'));
    $('#hour-10 .description').val(localStorage.getItem('10'));
    $('#hour-11 .description').val(localStorage.getItem('11'));
    $('#hour-12 .description').val(localStorage.getItem('12'));
    $('#hour-13 .description').val(localStorage.getItem('13'));
    $('#hour-14 .description').val(localStorage.getItem('14'));
    $('#hour-15 .description').val(localStorage.getItem('15'));
    $('#hour-16 .description').val(localStorage.getItem('16'));
    $('#hour-17 .description').val(localStorage.getItem('17'));



    // click event to clear input data and clear local storage. Alert added to confirm
    $('#reset-data').click(function (event) {
        event.preventDefault;
        $('textArea').val('');
        localStorage.clear();
        $('#confirm-save').addClass('hide');
        $('#confirm-reset').removeClass('hide');
        $('#confirm-reset').addClass('alert alert-success');
    })


});
