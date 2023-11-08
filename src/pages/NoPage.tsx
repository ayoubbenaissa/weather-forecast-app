import { Link } from "react-router-dom";

export const NoPage = () => {
  return (
    <div className="page-not-found">
      <h2 className="page-not-found_header">Oops, seems that you are in the wrong page!</h2>
      <div className="page-not-found_info">
        Try and go back to&nbsp;
        <Link className="home-link" to="/">
          Home page
        </Link>
      </div>
    </div>
  );
};
