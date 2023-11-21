// Срабатывает action computerChoiceHandler(), который переводит значение стейта enterComputerChoice из false в true и говорит, что пользователь нажал кнопку 'click'.

// Срабатывает action computerChoice(), который определяет выбор компьютера элемента для игры в текущем раунде - computerChoice.
// (example: "lizard")

// Срабатывает action gameFinish(), который запускается через 2 секунда после того, как пользователь нажал кнопку 'click'. Переводит значение стейта gameFinish из false в true. Стейт служит для того, чтобы сдвигать блоки с выбором пользователя и компьютера со второй страницы от центра к краям, а также для того, чтобы в центре появлялся компонент ResultGame.

// Срабатывает action setStore(), который изменяет стейт score, отвечающий за общий счет в игре (отображается в header).

import { useSelector, useDispatch } from "react-redux";

import {
  gameFinish,
  computerChoiceHandler,
  computerChoice,
  setStore,
} from "../../store/gameSlice";

import {
  selectEnterComputerChoice,
  selectCurrentElement,
} from "../../store/gameSlice";

import { getResultGame } from "./getResultGame";

export const RightBoxStart = () => {
  const dispatch = useDispatch();

  const showRightBox = useSelector(selectEnterComputerChoice);
  const myChoice = useSelector(selectCurrentElement);

  const changeRightBox = () => {
    dispatch(computerChoiceHandler());

    const arrElements = ["spock", "lizard", "scissors", "rock", "paper"];
    let randomItem =
      arrElements[Math.floor(Math.random() * arrElements.length)];

    dispatch(computerChoice(randomItem));
    setTimeout(() => {
      dispatch(gameFinish());
      dispatch(setStore(getResultGame(myChoice, randomItem)));
    }, 2000);
  };

  if (!showRightBox) {
    return (
      <div className="right-box">
        <h2>THE HOUSE PICKED</h2>
        <div className="comp-choice">
          <div className="circle-second-step">
            <div className="start-circle-second-step" onClick={changeRightBox}>
              <p className="text-flicker">click!</p>
            </div>
          </div>
        </div>
        <div className="mobile-title">THE HOUSE PICKED</div>
      </div>
    );
  }
};
