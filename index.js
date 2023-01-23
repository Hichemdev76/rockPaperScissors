const gameOutcomes = {
  rock: {
    rock: "tie",
    paper: "loss",
    scissors: "win",
  },
  paper: {
    rock: "win",
    paper: "tie",
    scissors: "loss",
  },
  scissors: {
    rock: "loss",
    paper: "win",
    scissors: "tie",
  },
};

function getComputerChoice() {
  const gameInputs = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * gameInputs.length);
  return gameInputs[index];
}
let computerSelection = getComputerChoice();
let playerSelection = "rock";
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "It's a Tie";
  let outcome = gameOutcomes[playerSelection][computerSelection];
  return outcome === "win" ? "Yey you won" : "You Lost";
}
console.log(playRound(playerSelection,computerSelection));
