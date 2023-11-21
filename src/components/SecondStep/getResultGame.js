const rules = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

export const getResultGame = (myChoice, computerChoice) => {
  if (myChoice === computerChoice) {
    return "DRAW";
  }
  if (
    rules[myChoice][0] === computerChoice ||
    rules[myChoice][1] === computerChoice
  ) {
    return "YOU WIN";
  } else {
    return "YOU LOSE";
  }
};
