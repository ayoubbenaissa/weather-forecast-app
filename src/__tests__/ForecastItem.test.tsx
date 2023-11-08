import { cleanup, render, screen } from "@testing-library/react";
import { ForecastItem } from "../components/ForecastItem";
import { mockForecastData } from "../utils/mockForecastData";

// clean-up after each test
afterEach(() => {
  cleanup();
});

describe("high level component check", () => {
  it("should check component UI", () => {
    render(<ForecastItem forecastItem={mockForecastData} itemId={1} />);

    // check component renders correct data:

    // date:
    const dateElement = screen.getByTestId("date-element-1");
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveTextContent("Day: 2023-11-08 Time: 15:00");

    // temperature:
    const temperatureElement = screen.getByTestId("temperature-element-1");
    expect(temperatureElement).toBeInTheDocument();
    expect(temperatureElement).toHaveTextContent("Temperature: 200");
  });
});
