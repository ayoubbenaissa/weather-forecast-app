import { cleanup } from "@testing-library/react";
import { Forecast } from "../pages/Forecast";
import { renderWithClient } from "../utils/test.utils";
import { mockForecastResponse } from "../utils/mockForecastData";
import axios from "axios";
jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// clean before every unit:
beforeEach(() => {
  jest.clearAllMocks();
});

// clean-up after each test
afterEach(() => {
  cleanup();
});

describe("checking Forecast component", () => {
  test("renders component", async () => {
    // mocking get call method from Axios:
    axios.get = jest.fn().mockResolvedValue({ data: mockForecastResponse });

    const result = renderWithClient(<Forecast />);

    const titleElement = await result.findByText(/Forecast Data/i);
    expect(titleElement).toBeInTheDocument();

    const forecastItems = await result.findAllByTestId(/forecast-item_wrapper/);
    // there should be only one forecast item
    expect(forecastItems.length).toBe(1);
  });

  test("should render error component", async () => {
    axios.get = jest.fn().mockRejectedValue(new Error('error message'));
    const result = renderWithClient(<Forecast />);

    const errorTitle = await result.findByText(/Sorry\! an error occurred/i);
    expect(errorTitle).toBeInTheDocument();

    const erroContent = await result.findByTestId("error-content");
    expect(erroContent).toBeInTheDocument();
    expect(erroContent).toHaveTextContent("error message");
  });
});
