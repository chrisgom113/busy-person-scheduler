$(function () {

    var current = $("#currentDay");




    function displayCurrent() {
        var now = dayjs().format('ddd, MMM DD, hh:mm a')
        current.text(now);

        nowTime = dayjs().format('HH');

        $('.time-block').each(function () {
            var theHour = $(this).attr('id').split("-")[1];

            if (nowTime < theHour) {
                $(this).addClass('future');


            } else if (nowTime == theHour) {
                $(this).addClass('present');
                $(this).children(".description").attr('placeholder','Current Hour');
                $(this).children('.description').addClass('white-font-placeholder');



            } else if (nowTime > theHour) {
                $(this).addClass('past');
                $(this).children(".description").attr('placeholder','passed').css('font-style', 'italic');

            }
        })

    }
    displayCurrent();



    $('.saveBtn').click(function (event) {
        event.preventDefault();

        var inputReminder = $(this).siblings('.description').val();
        var hour = $(this).parent().attr('id').split('-')[1];
        localStorage.setItem(hour, inputReminder);
        $('#confirm-save').removeClass('hide');
        $('#confirm-save').addClass('alert alert-success');

    })



    $('#hour-09 .description').val(localStorage.getItem('09'));
    $('#hour-10 .description').val(localStorage.getItem('10'));
    $('#hour-11 .description').val(localStorage.getItem('11'));
    $('#hour-12 .description').val(localStorage.getItem('12'));
    $('#hour-13 .description').val(localStorage.getItem('13'));
    $('#hour-14 .description').val(localStorage.getItem('14'));
    $('#hour-15 .description').val(localStorage.getItem('15'));
    $('#hour-16 .description').val(localStorage.getItem('16'));
    $('#hour-17 .description').val(localStorage.getItem('17'));





    $('#reset-data').click(function (event) {
        event.preventDefault;
        $('textArea').val('');
        localStorage.clear();
    })


});
