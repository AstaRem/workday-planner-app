let currentTime = $("#currentDay");
let clickBtns = [$('.clickBtn1'), $('.clickBtn2'), $('.clickBtn3')];
let tasks = [$('#task1'), $('#task2'), $('#task3')];
let hours = [$('#8AM'), $('#9AM'), $('#10AM'), $('#11AM') ];



let timeNow = moment().format('MMMM Do YYYY, h:mm a');
let hourNow = moment().format('hh');

$(function() {
    for(h = 0; h < hours.length; h++){
        let singleHourText = hours[h].text();
        let singleConverted = moment(`${singleHourText}`, 'hh A').format('hh');
        console.log(singleHourText);
        console.log(singleConverted);
        if(hourNow == singleConverted){
            hours[h].css("background-color", "orange")
        } else if(hourNow < singleConverted){
            hours[h].parent().css("background-color", "green")
        } else {
            hours[h].css("background-color", "grey")
        }

    }

    //displays time in description
  currentTime.html(timeNow);
  console.log(hourNow);

  //loops through buttons array, adds event listener to single button
  for (let i = 0; i < clickBtns.length; i++) {
    clickBtns[i].click(function() {
      console.log(`Save button ${i+1} was clicked.`);
    //saves user input to local storage
      let userInput = tasks[i].val();
      localStorage.setItem(`task${i+1}`, userInput);
    });

    //now continues displaying user input even when the page is reloaded
    let savedTask = localStorage.getItem(`task${i+1}`);
    // console.log(savedTask);
    tasks[i].val(savedTask);
  }
});

//get a single line time today
//converts time to 24-hour format
let convertedTime = moment("01:00 PM", 'hh:mm A').format('HH:mm')
console.log(convertedTime);
