let currentTime = $("#currentDay");
let clickBtn = $('.clickBtn');
let task1 = $('#task1');
let task2 = $('#task2');

let timeNow = moment().format('MMMM Do YYYY, h:mm a')
$(function(){
    currentTime.html(timeNow);

    clickBtn.on('click',  function(){
        console.log('Save button was clicked.')
        //now save info from input text field to local storage
        let userInput = task1.val();
        localStorage.setItem("task1", userInput);

        let userInput2 = task2.val();
        localStorage.setItem("task2", userInput2);

        

    })


})

//get a single line time today
//converts time to 24-hour format
let convertedTime = moment("01:00 PM", 'hh:mm A').format('HH:mm')
console.log(convertedTime);