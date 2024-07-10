/**
 * Check if a value is nullish (null or undefined).
 * @param value The value to check.
 * @returns true if the value is null or undefined.
 */
export function isNullish(value: unknown): boolean {
  return value === null || value === undefined;
}

/**
 * Check if two strings are equal, not case sensitive.
 * @param a The first string to compare, can be undefined.
 * @param b The second string to compare.
 * @returns true if they have the same character, not case sensitive, or if both are nullish values.
 */
export function areSameString(a: string | undefined | null, b: string | undefined | null): boolean {
  return a?.toLowerCase() === b?.toLowerCase();
}
