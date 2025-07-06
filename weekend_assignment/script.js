function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById(
    "player-choice"
  ).innerText = `You chose: ${playerChoice}`;
  document.getElementById(
    "computer-choice"
  ).innerText = `Computer chose: ${computerChoice}`;

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }

  document.getElementById("game-result").innerText = `Result: ${result}`;
}
