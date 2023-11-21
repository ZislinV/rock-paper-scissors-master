import lizard from "./icon-lizard.svg";

export const Lizard = () => {
  return (
    <div className="circle lizard">
      <div className="white-circle">
        <img
          className="lizard-img"
          data-key="lizard"
          src={lizard}
          alt="lizard"
        />
      </div>
    </div>
  );
};
