import { getDayFromDate, getTimeFromDate } from "../utils/Forecast.utils";

const VALID_DATE = "2023-11-08 12:00:00";
const INVALID_DATE = "no date here";

describe("check utility logic concerning Date string", () => {
  describe(`check "getDayFromDate" logic`, () => {
    it("should extract date from string respecting given pattern", () => {
      const extractedDay = getDayFromDate(VALID_DATE);
      expect(extractedDay).toMatch("2023-11-08");
    });
    it("should return empty string from string not respecting given pattern", () => {
      const extractedDay = getDayFromDate(INVALID_DATE);
      expect(extractedDay).toMatch("");
    });
  });

  describe(`check "getTimeFromDate" logic`, () => {
    it("should extract date from string respecting given pattern", () => {
      const extractedDay = getTimeFromDate(VALID_DATE);
      expect(extractedDay).toMatch("12:00");
    });
    it("should return empty string from string not respecting given pattern", () => {
      const extractedDay = getDayFromDate(INVALID_DATE);
      expect(extractedDay).toMatch("");
    });
  });
});
