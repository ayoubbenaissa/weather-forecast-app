import { ForecastPlainData } from "../types/ForecastData";
import { getDayFromDate, getTimeFromDate } from "../utils/Forecast.utils";

import "../styles/ForecastItem.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MouseClickEvent } from "../types/utils.types";
import { ForecastDetails } from "./ForecastItemDetails";

export const ForecastItem = ({ forecastItem, itemId }: { forecastItem: ForecastPlainData; itemId: number }) => {
  const [showForecastDetails, setShowForecastDetails] = useState(false);

  const closeDetailsModal = (e: MouseClickEvent) => {
    e.preventDefault();
    setShowForecastDetails(false);
  };

  const openDetailsModal = (e: MouseClickEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowForecastDetails(true);
  };

  return (
    <>
      <div data-testid={`forecast-item_wrapper-${itemId}`} className="forecast-item_wrapper">
        <div data-testid={`date-element-${itemId}`} className="forecat-item_field">
          <div className="forecat-item_field_label">Day:&nbsp;</div>
          <div className="forecat-item_field_value">{getDayFromDate(forecastItem.dt_txt)}</div>
          <div className="forecat-item_field_label">&nbsp;Time:&nbsp;</div>
          <div className="forecat-item_field_value">{getTimeFromDate(forecastItem.dt_txt)}</div>
        </div>
        <div data-testid={`temperature-element-${itemId}`} className="forecat-item_field">
          <div className="forecat-item_field_label">Temperature:&nbsp;</div>
          <div className="forecat-item_field_value">{forecastItem.main.temp}</div>
        </div>
        <div className="forecat-item_field">
          <div className="forecat-item_field_label">Humidity:&nbsp;</div>
          <div className="forecat-item_field_value">{forecastItem.main.humidity}</div>
        </div>
        <div className="forecat-item_field">
          <div className="forecat-item_field_label">Weather:&nbsp;</div>
          <div className="forecat-item_field_value">{forecastItem.weather[0].main}</div>
        </div>
        <div onClick={openDetailsModal} className="forecat-item_actions">
          see more details
        </div>
      </div>
      {showForecastDetails && createPortal(<ForecastDetails forecastItem={forecastItem} closeModal={closeDetailsModal} />, document.getElementById("app-modal") || document.body)}
    </>
  );
};
