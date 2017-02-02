
//create a variable to store the answer
var answer;

//create a variable for each button/input
var numberGuess = document.querySelector('.number-guess');
var guessInput = document.querySelector('.guess-input');
var clearInput = document.querySelector('.clear-input');
var reset = document.querySelector('.reset');
//create other cool variables
var bigLastGuess = document.querySelector('.big-last-guess');
var newMin = document.querySelector('.range-min');
var newMax = document.querySelector('.range-max');

//these are for adding the range
var minGuess = 1;
var maxGuess = 100;

//generate the random number for the player to guess
function generateNumber( ) {
  answer = Math.floor((Math.random() * maxGuess) + minGuess);
  console.log(answer);
}
//this triggers the random number to generate on page load
window.onload = function() {
  generateNumber();
}

//evaluate the players guess
var playerGuess = document.querySelector('.number-guess');

guessInput.addEventListener("click", function(){
    var h2 = document.querySelector(".feedback");
    if (playerGuess.value > answer && playerGuess.value < maxGuess){
      h2.innerText =  "That is too high.";
    } else if (playerGuess.value < answer && playerGuess.value > minGuess) {
      h2.innerText = "That is too low.";
    } else if (playerGuess.value == answer) {
      h2.innerText = "BOOM!!!";
    } else {
      h2.innerText = "Your guess must be a number between " + minGuess + " and " + maxGuess + ".";
    };
})

//clear the last guess
clearInput.addEventListener('click', function (){
  document.querySelector('.number-guess').value = "";
})

//reset the game with the reset button
reset.addEventListener('click', function (){
  window.location.reload();
})
//display the players' last guess
guessInput.addEventListener("click", function(){
  var displayGuess = document.querySelector('.big-last-guess');
  displayGuess.innerText = playerGuess.value;
})
//this disables the buttons when there is no value in the guess input.
 numberGuess.addEventListener('keyup', function(){
   clearInput.disabled=false;
   guessInput.disabled=false;
   reset.disabled=false;
 })
