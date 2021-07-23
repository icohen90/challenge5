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
                $(this).addClass("past");
            }
            else if (rowTime === time) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");

            }
        })
    }

    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h13 .description").val(localStorage.getItem("h13"));
    $("#h14 .description").val(localStorage.getItem("h14"));
    $("#h15 .description").val(localStorage.getItem("h15"));
    $("#h16 .description").val(localStorage.getItem("h16"));
    $("#h17 .description").val(localStorage.getItem("h17"));

    trackCurrentTime();
})









