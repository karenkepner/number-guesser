var answer = Math.floor(Math.random() * 10);


var guess = parseInt(document.getElementById('.numberGuess'));
guess.addEventListener("click", function(){
if (guess > answer){
  h2.innerText =  "That is too high.";
} else if (guess < answer) {
  h2.innerText = "That is too low.";
} else if (guess == answer) {
  h2.innerText = "BOOM!!!";
} else {
  return "Your guess must be a number in the correct range.";
};
})
