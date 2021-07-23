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



})









