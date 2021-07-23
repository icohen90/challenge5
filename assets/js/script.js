// Start by Getting the day and date
var currentDate = moment().format('[Today is] dddd, MMMM Do, YYYY');
$('#currentDay').html(currentDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function (){
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function trackCurrentTime() {
        var time = moment().hour();
        console.log(time);
        
        $(".time-block").each(function(){
            var rowTime = parseInt($(this).attr("id").split("h")[1]);
            console.log(rowTime);
            
            if (rowTime < time) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (rowTime === time) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h1 .description").val(localStorage.getItem("h1"));
    $("#h2 .description").val(localStorage.getItem("h2"));
    $("#h3 .description").val(localStorage.getItem("h3"));
    $("#h4 .description").val(localStorage.getItem("h4"));
    $("#h5 .description").val(localStorage.getItem("h5"));

    trackCurrentTime();
})









