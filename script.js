let currentTime = $("#currentDay");
let timeNow = moment().format('MMMM Do YYYY, h:mm a')
$(function(){
    currentTime.html(timeNow);


})


