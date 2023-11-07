import { useQuery } from "@tanstack/react-query";
import { getForecastInfo } from "../utils/Forecast.utils";
import { InfoSpinner } from "../components/InfoSpinner";
import { Error } from "../components/Error";

import "../styles/Forecast.scss"
import { ForecastPlainData } from "../types/ForecastData";
import { ForecastItem } from "../components/ForecastItem";

export const Forecast = () => {
    // fetching forecast data from API
    const { isLoading, error, data: forecastData } = useQuery({
        queryKey: ["forecastInfo"],
        queryFn: getForecastInfo
    });

    if (isLoading) return <InfoSpinner infoText="fetching forecast data ..." />

    if (error) return <Error errorMessage={JSON.stringify((error as Error).message || 'error')} />

    console.log(` ** data fetched: ${JSON.stringify(forecastData)}`);

    const forecastPlainData = forecastData.list as ForecastPlainData[];

    return (
        <div className="forecast-data">
            <h1 className="forecast-page_header">Forecast Data</h1>
            {forecastPlainData.map((forecastItem, index) => <ForecastItem key={index} forecastItem={forecastItem} />)}
        </div>
    )
}