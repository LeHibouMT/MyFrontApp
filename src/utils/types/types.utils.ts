/**
 * Interface for all contexts, with a value and a function to change the value.
 * @param value The value of the context.
 * @param setValue Function to change the value.
 */
export interface ContextInterface<T> {
  value: T;
  setValue: (newValue: T) => void;
}
