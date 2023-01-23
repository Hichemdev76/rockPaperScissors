function getComputerChoice() {
    const gameInputs = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * gameInputs.length);
    return gameInputs[index];
  }