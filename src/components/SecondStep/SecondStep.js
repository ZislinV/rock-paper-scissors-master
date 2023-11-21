import "./SecondStep.css";

import { LeftBox } from "./LeftBox";
import { RightBoxStart } from "./RightBoxStart";
import { RightBoxChoice } from "./RightBoxChoice";
import { ResultGame } from "./ResultGame";

const SecondStep = () => {
  return (
    <div className="second-step">
      <LeftBox />
      <ResultGame />
      <RightBoxStart />
      <RightBoxChoice />
    </div>
  );
};

export default SecondStep;
