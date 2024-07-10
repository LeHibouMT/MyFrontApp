import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { isNullish, areSameString } from "utils/functions.utils";

describe("functions.utils", () => {
  describe("isNullish", () => {
    it("should return true for null", () => {
      expect(isNullish(null)).toBe(true);
    });

    it("should return true for undefined", () => {
      expect(isNullish(undefined)).toBe(true);
    });

    it("should return false for non-nullish values", () => {
      expect(isNullish(0)).toBe(false);
      expect(isNullish("")).toBe(false);
      expect(isNullish(false)).toBe(false);
    });
  });

  describe("areSameString", () => {
    it("should return true for two equal strings, case insensitive", () => {
      expect(areSameString("test", "TEST")).toBe(true);
    });

    it("should return false for two different strings", () => {
      expect(areSameString("test", "toast")).toBe(false);
    });

    it("should return true for two nullish values", () => {
      expect(areSameString(null, undefined)).toBe(true);
    });

    it("should return false when one is nullish and the other is not", () => {
      expect(areSameString(null, "test")).toBe(false);
      expect(areSameString(undefined, "test")).toBe(false);
    });
  });
});
