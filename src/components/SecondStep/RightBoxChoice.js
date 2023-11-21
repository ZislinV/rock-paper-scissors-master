import { useSelector } from "react-redux";
import {
  selectEnterComputerChoice,
  selectGameFinish,
  selectComputerChoice,
  selectStatusRound,
} from "../../store/gameSlice";

import { CSSTransition } from "react-transition-group";
import { getImage } from "./getImage";

export const RightBoxChoice = () => {
  const showRightBox = useSelector(selectEnterComputerChoice);
  const finishMove = useSelector(selectGameFinish);
  const computerChoice = useSelector(selectComputerChoice);
  const status = useSelector(selectStatusRound);

  // if (computerChoice) {
  return (
    <CSSTransition
      in={showRightBox}
      classNames="my-node"
      timeout={2000}
      unmountOnExit
    >
      <div className={finishMove ? "move-right right-box" : "right-box"}>
        <h2>THE HOUSE PICKED</h2>
        <div className="comp-choice">
          <div
            className={
              status === "lose"
                ? `circle-second-step ${computerChoice}-two winner`
                : `circle-second-step ${computerChoice}-two`
            }
          >
            <div className="white-circle-second-step">
              <img src={getImage(computerChoice)} alt={computerChoice} />
            </div>
          </div>
        </div>
        <div className="mobile-title">THE HOUSE PICKED</div>
      </div>
    </CSSTransition>
  );
  // }
};
