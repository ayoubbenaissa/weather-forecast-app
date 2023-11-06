import spinner from "../assets/icon-spinner.png";
import "../styles/Spinner.scss";

export const InfoSpinner = ({ infoText }: { infoText: string }) => {
  return (
    <>
      <h2>{infoText}</h2>
      <img src={spinner} className="spinner" alt="logo" />
    </>
  );
};
