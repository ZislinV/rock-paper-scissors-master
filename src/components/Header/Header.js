import logo from "./logo-bonus.svg";
import { useSelector } from "react-redux";
import { selectScore } from "../../store/gameSlice";

const Header = () => {
  const score = useSelector(selectScore);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="score-box">
        <h4>SCORE</h4>
        <h1>{score}</h1>
      </div>
    </header>
  );
};

export default Header;
