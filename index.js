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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "It's a Tie";
  let outcome = gameOutcomes[playerSelection][computerSelection];
  return outcome === "win" ? "Yey you won" : "You Lost";
}
function game() {
  let win = 0,
    lost = 0;
  for (let counter = 0; counter < 5; counter++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt(
      "Please enter your selection: rock, paper, or scissors"
    ).toLowerCase();

    let outcome = playRound(playerSelection, computerSelection);
    if (outcome == "It's a Tie") {
      win++;
      lost++;
    } else if (outcome == "Yey you won") win++;
    else lost++;
    console.log(`${outcome} - Win: ${win}, Lost: ${lost}`);
  }
}
