import "@testing-library/jest-dom";
import Cookies from "js-cookie";
import {
  PossibleLanguagesEnum,
  isValidLanguage,
  getLanguageCookie,
  setLanguageCookie,
  LanguageKey
} from "utils/language.utils";

describe("language.utils", () => {
  describe("isValidLanguage", () => {
    it("should return true for valid language values", () => {
      expect(isValidLanguage(PossibleLanguagesEnum.english)).toBe(true);
      expect(isValidLanguage(PossibleLanguagesEnum.french)).toBe(true);
    });

    it("should return false for invalid language values", () => {
      expect(isValidLanguage("de")).toBe(false);
      expect(isValidLanguage(123)).toBe(false);
      expect(isValidLanguage(null)).toBe(false);
      expect(isValidLanguage(undefined)).toBe(false);
    });
  });

  describe("getLanguageCookie", () => {
    it("should return the language cookie value if it exists", () => {
      Cookies.get = jest.fn().mockImplementationOnce(() => PossibleLanguagesEnum.english);

      expect(getLanguageCookie()).toBe(PossibleLanguagesEnum.english);
    });

    it("should return undefined if the language cookie does not exist", () => {
      Cookies.get = jest.fn().mockImplementationOnce(() => {});

      expect(getLanguageCookie()).toBeUndefined();
    });

    it("should return undefined if the language cookie is invalid", () => {
      Cookies.get = jest.fn().mockImplementationOnce(() => "test");

      expect(getLanguageCookie()).toBeUndefined();
    });
  });

  describe("setLanguageCookie", () => {
    it("should set the language cookie with the provided value", () => {
      Cookies.set = jest.fn();
      setLanguageCookie(PossibleLanguagesEnum.french);
      expect(Cookies.set).toHaveBeenCalledWith(LanguageKey, PossibleLanguagesEnum.french, {
        sameSite: "Strict",
        secure: true
      });

      Cookies.get = jest.fn().mockImplementationOnce(() => PossibleLanguagesEnum.french);
      expect(getLanguageCookie()).toBe(PossibleLanguagesEnum.french);
    });
  });
});
