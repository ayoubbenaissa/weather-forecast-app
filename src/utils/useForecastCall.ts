import { useQuery } from "@tanstack/react-query";
import { getForecastInfo } from "./Forecast.utils";

export const useForecastCall = () => {
  const {
    isLoading,
    error,
    data: forecastData,
  } = useQuery({
    queryKey: ["forecastInfo"],
    queryFn: getForecastInfo,
  });

  return { isLoading, error, forecastData };
};
