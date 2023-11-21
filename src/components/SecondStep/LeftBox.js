import { useSelector } from "react-redux";
import {
  selectCurrentElement,
  selectGameFinish,
  selectStatusRound,
} from "../../store/gameSlice";
import { getImage } from "./getImage";

export const LeftBox = () => {
  console.log("left box");
  const myChoice = useSelector(selectCurrentElement);
  const finish = useSelector(selectGameFinish);
  const status = useSelector(selectStatusRound);

  return (
    <div className={finish ? "move-left left-box" : "left-box"}>
      <h2>YOU PICKED</h2>
      <div className="my-choice">
        <div
          className={
            status === "win"
              ? `circle-second-step ${myChoice}-two winner`
              : `circle-second-step ${myChoice}-two`
          }
        >
          <div className="white-circle-second-step">
            <img src={getImage(myChoice)} alt={myChoice} />
          </div>
        </div>
      </div>
      <div className="mobile-title">YOU PICKED</div>
    </div>
  );
};
