/**   ****** API types ******   **/
type MainTempData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

type WeatherDescriptionItem = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export interface ForecastPlainData {
  dt: number;
  main: MainTempData;
  weather: WeatherDescriptionItem[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

/**   ****** my defined types ******   **/
type WeatherInfo = {
  temperature: number;
  humidity: number;
  weather: string;
};

export interface ForecastDataListItem {
  day: string; // dt_txt
  time: string;
  weatherInfo: WeatherInfo;
}
