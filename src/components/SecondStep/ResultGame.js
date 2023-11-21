// Срабатывает action newGame(), который обнуляет все стейты в gameSlice, кроме общего счета игры.

import { useDispatch, useSelector } from "react-redux";
import {
  selectGameFinish,
  selectCurrentElement,
  selectComputerChoice,
  newGame,
} from "../../store/gameSlice";
import { CSSTransition } from "react-transition-group";
import { getResultGame } from "./getResultGame";
import { Link } from "react-router-dom";

export const ResultGame = () => {
  const finish = useSelector(selectGameFinish);
  const myChoice = useSelector(selectCurrentElement);
  const computerChoice = useSelector(selectComputerChoice);

  const dispatch = useDispatch();

  const updateGame = () => {
    dispatch(newGame());
  };
  return (
    <Link to="/">
      <CSSTransition
        in={finish}
        classNames="my-finish"
        timeout={2000}
        unmountOnExit
      >
        <div className="result">
          <h1>{getResultGame(myChoice, computerChoice)}</h1>
          <button className="new-game" onClick={updateGame}>
            PLAY AGAIN
          </button>
        </div>
      </CSSTransition>
    </Link>
  );
};
