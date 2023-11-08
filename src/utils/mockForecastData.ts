import { ForecastCallResponse, ForecastPlainData } from "../types/ForecastData";

export const mockForecastData: ForecastPlainData = {
  dt: 123,
  main: {
    temp: 200,
    feels_like: 200,
    temp_min: 200,
    temp_max: 200,
    pressure: 1000,
    sea_level: 1000,
    grnd_level: 1000,
    humidity: 75,
    temp_kf: 1,
  },
  weather: [
    {
      id: 123,
      main: "clear",
      description: "clear weather",
      icon: "01d",
    },
  ],
  clouds: { all: 10 },
  wind: {
    speed: 0.5,
    deg: 50,
    gust: 0,
  },
  visibility: 1000,
  pop: 0,
  sys: { pod: "d" },
  dt_txt: "2023-11-08 15:00:00",
};

export const mockForecastResponse: ForecastCallResponse = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [mockForecastData],
  city: {
    id: 3163858,
    name: "Zocca",
    coord: {
      lat: 44.34,
      lon: 10.99,
    },
    country: "IT",
    population: 4593,
    timezone: 3600,
    sunrise: 1699423314,
    sunset: 1699459059,
  },
};
