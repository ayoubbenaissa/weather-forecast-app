import axios, { AxiosResponse } from "axios";
import { ForecastCallResponse } from "../types/ForecastData";

export const getForecastInfo = async (): Promise<ForecastCallResponse> => {
  const forecastCall: AxiosResponse<ForecastCallResponse> = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${process.env.REACT_APP_API_TOKEN}`);
  return forecastCall.data;
};

export const getDayFromDate = (day: string): string => {
  return /\d*-\d*-\d*/.exec(day)?.pop() || "";
};

export const getTimeFromDate = (day: string): string => {
  return /\d*:\d*/.exec(day)?.pop() || "";
};
