import spock from "./icon-spock.svg";

export const Spock = () => {
  return (
    <div className="circle spock">
      <div className="white-circle">
        <img src={spock} alt="spock" className="spock-img" data-key="spock" />
      </div>
    </div>
  );
};
