import { useEffect, useState } from "react";
import { IDestination } from "../../@types/destination";

export const useLocalStorage = (
  localStorageKey: string,
  defaultValue: IDestination[] | [],
) => {
  const [value, setValue] = useState(() => {
    const localStorageItem = localStorage.getItem(localStorageKey);
    // If no value was returned from local storage, use the default value.
    if (localStorageItem === null) return defaultValue;
    try {
      return JSON.parse(localStorageItem);
    } catch (err) {
      // If the local storage value was not valid JSON, return the default value.
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
