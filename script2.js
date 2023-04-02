let currentTime = $("#currentDay");
let clickBtns = [$('.clickBtn1'), $('.clickBtn2'), $('.clickBtn3')];
let tasks = [$('#task1'), $('#task2'), $('#task3')];

let timeNow = moment().format('MMMM Do YYYY, h:mm a');

$(function() {
    //displays time in description
  currentTime.html(timeNow);

  //loops through buttons array, adds event listener to single button
  for (let i = 0; i < clickBtns.length; i++) {
    clickBtns[i].click(function() {
      console.log(`Save button ${i+1} was clicked.`);

      let userInput = tasks[i].val();
      localStorage.setItem(`task${i+1}`, userInput);
    });

    let savedTask = localStorage.getItem(`task${i+1}`);
    console.log(savedTask);
    tasks[i].val(savedTask);
  }
});
