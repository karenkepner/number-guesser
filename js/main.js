var answer = Math.floor(Math.random() * 10);

var playerGuess = document.querySelector('.numberGuess')

playerGuess.addEventListener("click", function(){
  var h2 = document.querySelector(".feedback");
    if (playerGuess > answer){
      h2.innerText =  "That is too high.";
    } else if (playerGuess < answer) {
      h2.innerText = "That is too low.";
    } else if (playerGuess == answer) {
      h2.innerText = "BOOM!!!";
    } else {
      h2.innerText = "Your guess must be a number in the correct range.";
    };
})
