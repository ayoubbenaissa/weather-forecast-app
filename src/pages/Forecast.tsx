import { InfoSpinner } from "../components/InfoSpinner";
import { Error } from "../components/Error";
import { ForecastItem } from "../components/ForecastItem";
import { useForecastCall } from "../utils/useForecastCall";

import "../styles/Forecast.scss";

export const Forecast = () => {
  // fetching forecast data from API
  const { isLoading, error, forecastData } = useForecastCall();

  // this would be displayed while fetching data from backend:
  if (isLoading) return <InfoSpinner infoText="fetching forecast data ..." />;

  // this will be displayed in case the call fails:
  if (error) return <Error errorMessage={JSON.stringify((error as Error).message || "error")} />;

  if (forecastData) {
    const forecastPlainData = forecastData.list;

    return (
      <div className="forecast-data">
        <h1 className="forecast-page_header">Forecast Data</h1>
        {forecastPlainData.map((forecastItem, index) => (
          <ForecastItem key={index} itemId={index} forecastItem={forecastItem} />
        ))}
      </div>
    );
  }
  // this would be needed so that the component always return a JSX expression
  return <></>;
};
