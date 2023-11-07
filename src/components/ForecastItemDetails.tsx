import { ForecastPlainData } from "../types/ForecastData";
import { getDayFromDate, getTimeFromDate } from "../utils/Forecast.utils";

import "../styles/ForecastDetails.scss";

import dateIcon from "../assets/icon-time.png";
import maxTempIcon from "../assets/icon-hot.png";
import minTempIcon from "../assets/icon-cold.png";
import infoIcon from "../assets/icon-info.png";
import closeIcon from "../assets/icons-close.png";
import { MouseClickEvent } from "../types/utils.types";

export const ForecastDetails = ({ forecastItem, closeModal }: { forecastItem: ForecastPlainData; closeModal: (e: MouseClickEvent) => void }) => {
  return (
    <div className="forecast-details_container" onClick={closeModal}>
      <div className="forecast-details_modal" onClick={(e) => e.stopPropagation()}>
        <div onClick={closeModal} className="forecast-details_close">
            <img src={closeIcon} alt="close" />
        </div>
        <div className="forecat-details_field">
          <div className="forecat-details_field_wrapper">
            <img src={dateIcon} alt="Date" className="forecast-details_icon" />
            <div className="forecat-details_field_label">Day:&nbsp;</div>
            <div className="forecat-details_field_value">{getDayFromDate(forecastItem.dt_txt)}</div>
          </div>
          <div className="forecat-details_field_wrapper">
            <div className="forecat-details_field_label">&nbsp;Time:&nbsp;</div>
            <div className="forecat-details_field_value">{getTimeFromDate(forecastItem.dt_txt)}</div>
          </div>
        </div>
        <div className="forecat-details_field">
          <div className="forecat-details_field_label">Temperature:&nbsp;</div>
          <div className="forecat-details_field_value">{forecastItem.main.temp}</div>
        </div>
        <div className="forecat-details_field">
          <div className="forecat-details_field_wrapper">
            <img src={minTempIcon} alt="Date" className="forecast-details_icon" />
            <div className="forecat-details_field_label">Min Temperature:&nbsp;</div>
            <div className="forecat-details_field_value">{forecastItem.main.temp_min}&nbsp;</div>
          </div>
          <div className="forecat-details_field_wrapper">
            <img src={maxTempIcon} alt="Date" className="forecast-details_icon" />
            <div className="forecat-details_field_label">Max Temperature:&nbsp;</div>
            <div className="forecat-details_field_value">{forecastItem.main.temp_max}</div>
          </div>
        </div>
        <div className="forecat-details_field">
          <img src={infoIcon} alt="Date" className="forecast-details_icon" />
          <div className="forecat-details_field_label">Weather description::&nbsp;</div>
          <div className="forecat-details_field_value">{forecastItem.weather[0].description}</div>
        </div>
      </div>
    </div>
  );
};
