let currentTime = $("#currentDay");
let clickBtn = $('.clickBtn');
// let clickBtn2 = $('.clickBtn');
let task1 = $('#task1');
let task2 = $('#task2');
let tasks = $('.task');
let taskId = $('div.row[id]');


//select all buttons
let buttons = $('.clickBtn');
console.log(tasks.length)

$(function(){
    $("#hour-9, button").click(function(){
    
    })

    })
//show date in description
// let timeNow = moment().format('MMMM Do YYYY, h:mm a')
// $(function(){
//     currentTime.html(timeNow);

//     clickBtn.on('click',  function(){
//         console.log('Save button was clicked.')
//         //now save info from input text field to local storage
//         let userInput = task1.val();
//         localStorage.setItem("task1", userInput);

//         // let userInput2 = task2.val();
//         // localStorage.setItem("task2", userInput2);

//     })
//     clickBtn2.on('click',  function(){
//         console.log('Save button 2 was clicked.')
//         //now save info from input text field to local storage
//         let userInput2 = task2.val();
//         localStorage.setItem("task2", userInput2);

//     })

//     savedTask1 = localStorage.getItem("task1");
//     console.log(savedTask1);
//     task1.val(savedTask1);

//     savedTask2 = localStorage.getItem("task2");
//     console.log(savedTask2);
//     task2.val(savedTask2);


// //now - how to identify each task?
// //will need time orientation - to mark now-past-future with colors
// //instead of clickBtn2.on(), clickBtn3.on(), write loop for each? select all of them with jquery - it will return an array, then say each()



// })

// //get a single line time today
// //converts time to 24-hour format
// let convertedTime = moment("01:00 PM", 'hh:mm A').format('HH:mm')
// console.log(convertedTime);