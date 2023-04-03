let currentTime = $("#currentDay");
let clickBtn1 = $('.clickBtn1');
let clickBtn2 = $('.clickBtn2');
let clickBtn3 = $('.clickBtn3');
let task1 = $('#task1');
let task2 = $('#task2');
let task3 = $('#task3');


let timeNow = moment().format('MMMM Do YYYY, h:mm a')
$(function(){
    currentTime.html(timeNow);

    clickBtn1.click(function(){
        console.log('Save button 1 was clicked.')
        //now save info from input text field to local storage
        let userInput = task1.val();
        localStorage.setItem("task1", userInput);

        // let userInput2 = task2.val();
        // localStorage.setItem("task2", userInput2);

    })
    clickBtn2.click(function(){
        console.log('Save button 2 was clicked.')
        //now save info from input text field to local storage
        let userInput2 = task2.val();
        localStorage.setItem("task2", userInput2);

    })

    clickBtn3.click(function(){
        console.log('Save button 3 was clicked.')
        //now save info from input text field to local storage
        let userInput3 = task3.val();
        localStorage.setItem("task3", userInput3);

    })

    savedTask1 = localStorage.getItem("task1");
    console.log(savedTask1);
    task1.val(savedTask1);

    savedTask2 = localStorage.getItem("task2");
    console.log(savedTask2);
    task2.val(savedTask2);

    savedTask3 = localStorage.getItem("task3");
    console.log(savedTask3);
    task3.val(savedTask3);






})

