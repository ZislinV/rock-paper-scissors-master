import rock from "./icon-rock.svg";

export const Rock = () => {
  return (
    <div className="circle rock">
      <div className="white-circle">
        <img src={rock} alt="rock" className="rock-img" data-key="rock" />
      </div>
    </div>
  );
};
