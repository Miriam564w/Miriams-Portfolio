let user = "";
let choices = ["rock", "paper", "scissors"];


function select(selection) {
  user = selection;
  let computer = choices[Math.floor(Math.random() * choices.length)];
  let result = "";


  if (computer === user) {
    result = "It's a tie!";
  } else if (
    (user === "rock" && computer === "paper") ||
    (user === "paper" && computer === "scissors") ||
    (user === "scissors" && computer === "rock")
  ) {
    result = `You lose! ${computer} beats ${user}`;
  } else {
    result = `You win! 🎉 ${user} beats ${computer}`;
  }


  document.getElementById("result").innerHTML = result;
}