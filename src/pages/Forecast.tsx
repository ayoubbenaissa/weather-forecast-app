import { useQuery } from "@tanstack/react-query";
import { getForecastInfo } from "../utils/Forecast.utils";
import { InfoSpinner } from "../components/InfoSpinner";
import { Error } from "../components/Error";

export const Forecast = () => {
    // fetching forecast data from API
    const { isLoading, error, data: forecastData } = useQuery({
        queryKey: ["forecastInfo"],
        queryFn: getForecastInfo
    });

    if (isLoading) return <InfoSpinner infoText="fetching forecast data ..." />

    if (error) return <Error errorMessage={JSON.stringify((error as Error).message || 'error')} />

    console.log(` ** data fetched: ${JSON.stringify(forecastData)}`);

    return (
        <div className="forecast-data">
            <h1>Forecast Data</h1>
            <div>{JSON.stringify(forecastData)}</div>
        </div>
    )
}