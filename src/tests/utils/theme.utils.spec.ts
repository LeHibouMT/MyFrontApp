import "@testing-library/jest-dom";
import Cookies from "js-cookie";
import { isValidTheme, getThemeCookie, setThemeCookie, PossibleThemesEnum, ThemeKey } from "utils/theme.utils";

describe("Theme Utils", () => {
  describe("isValidTheme", () => {
    it("should return true for valid themes", () => {
      expect(isValidTheme(PossibleThemesEnum.light)).toBe(true);
      expect(isValidTheme(PossibleThemesEnum.dark)).toBe(true);
    });

    it("should return false for invalid themes", () => {
      expect(isValidTheme("invalid")).toBe(false);
      expect(isValidTheme(123)).toBe(false);
      expect(isValidTheme(null)).toBe(false);
      expect(isValidTheme(undefined)).toBe(false);
    });
  });

  describe("getThemeCookie", () => {
    it("should return the theme cookie if it exists and is valid", () => {
      Cookies.get = jest.fn().mockImplementationOnce(() => PossibleThemesEnum.light);

      expect(getThemeCookie()).toBe(PossibleThemesEnum.light);
    });

    it("should return undefined if the theme cookie does not exist", () => {
      Cookies.get = jest.fn().mockImplementationOnce(() => {});

      expect(getThemeCookie()).toBeUndefined();
    });

    it("should return undefined if the theme cookie is invalid", () => {
      Cookies.get = jest.fn().mockImplementationOnce(() => "test");

      expect(getThemeCookie()).toBeUndefined();
    });
  });

  describe("setThemeCookie", () => {
    it("should set the theme cookie with the specified value", () => {
      Cookies.set = jest.fn();
      setThemeCookie(PossibleThemesEnum.dark);
      expect(Cookies.set).toHaveBeenCalledWith(ThemeKey, PossibleThemesEnum.dark, { sameSite: "Strict", secure: true });

      Cookies.get = jest.fn().mockImplementationOnce(() => "dark");
      expect(getThemeCookie()).toBe(PossibleThemesEnum.dark);
    });
  });
});
