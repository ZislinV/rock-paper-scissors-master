import spock from "../FirstStep/GameElements/icon-spock.svg";
import lizard from "../FirstStep/GameElements/icon-lizard.svg";
import scissors from "../FirstStep/GameElements/icon-scissors.svg";
import rock from "../FirstStep/GameElements/icon-rock.svg";
import paper from "../FirstStep/GameElements/icon-paper.svg";

export const getImage = (value) => {
  switch (value) {
    case "spock":
      return spock;
    case "lizard":
      return lizard;
    case "scissors":
      return scissors;
    case "rock":
      return rock;
    case "paper":
      return paper;
    default:
      return true;
  }
};
