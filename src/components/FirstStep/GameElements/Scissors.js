import scissors from "./icon-scissors.svg";

export const Scissors = () => {
  return (
    <div className="circle scissors">
      <div className="white-circle">
        <img
          src={scissors}
          alt="scissors"
          className="scissors-img"
          data-key="scissors"
        />
      </div>
    </div>
  );
};
