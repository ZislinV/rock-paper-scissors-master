// устанавливается action yourChoice(), который определяет выбор пользователем элемента для игры в новом раунде - currentElement.
// (example: "lizard")

import { Lizard } from "./GameElements/Lizard";
import { Spock } from "./GameElements/Spock";
import { Scissors } from "./GameElements/Scissors";
import { Rock } from "./GameElements/Rock";
import { Paper } from "./GameElements/Paper";

import pentagon from "./bg-pentagon.svg";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { yourChoice } from "../../store/gameSlice";

const FirstStep = () => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    // e.preventDefault() ;

    const classNames = [
      "lizard-img",
      "spock-img",
      "scissors-img",
      "paper-img",
      "rock-img",
    ];

    if (
      classNames.some((className) => e.target.classList.contains(className))
    ) {
      dispatch(yourChoice(e.target.getAttribute("data-key")));
    }
  };

  return (
    <div className="first-step" onClick={clickHandler}>
      <img id="pentagon" src={pentagon} alt="pentagon" />

      <Link to="/rock-paper-scissors-master/secondStep">
        <Lizard />
        <Spock />
        <Scissors />
        <Paper />
        <Rock />
      </Link>
    </div>
  );
};

export default FirstStep;
