var button = document.getElementById('rockButton')
button.addEventListener('click', function() {
  play("rock")
})

var button = document.getElementById('paperButton')
button.addEventListener('click', function() {
  play("paper")
})

var button = document.getElementById('scissorsButton')
button.addEventListener('click', function() {
  play("scissors")
})



function play(playerChoice) {
  choices = ["rock", "paper", "scissors"]
  var compChoice = choices[Math.floor(Math.random() * 3)];
  console.log("You chose " + playerChoice)
  console.log("computer chose " + compChoice)
    document.getElementById('gameOutcome').innerHTML =
    ("You chose: " + playerChoice + ' Computer chose: ' + compChoice)
    if(compChoice === playerChoice) {
      document.getElementById('winner').innerHTML = 'Tie'
  } else if((compChoice === 'rock' && playerChoice === 'scissors')
        || (compChoice === 'paper' && playerChoice === 'rock' )
        || (compChoice === 'scissors' && playerChoice === 'paper')) {
      document.getElementById('winner').innerHTML = 'You Lose.'
  } else {
      document.getElementById('winner').innerHTML = 'You Win!'
  }
}
