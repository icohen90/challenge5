// Start by Getting the day and date
var currentDate = moment().format('[Today is] dddd, MMMM Do, YYYY');
$('#currentDay').html(currentDate);

$(document).ready(function(){
    $(".saveBtn").on("click", function (){
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })


    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h1 .description").val(localStorage.getItem("h1"));
    $("#h2 .description").val(localStorage.getItem("h2"));
    $("#h3 .description").val(localStorage.getItem("h3"));
    $("#h4 .description").val(localStorage.getItem("h4"));
    $("#h5 .description").val(localStorage.getItem("h5"));




})









