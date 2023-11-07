import { Link } from "react-router-dom";

import "../styles/Home.scss";

export const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page_content">
        <div className="home-welcome">
          Welcome to &nbsp;<div className="app-name">Weather Forecast App</div>
        </div>
        <div className="home-description">
          To see weather forecast for the upcoming 5 days, navigate to <Link className="link-forecast-page" to="/forecast">Forecast Page</Link>
        </div>
      </div>
    </div>
  );
};
