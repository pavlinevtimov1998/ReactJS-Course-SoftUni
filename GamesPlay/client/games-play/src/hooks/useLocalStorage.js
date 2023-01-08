import { useState } from "react";

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  });

  const setItemToLocalStorage = (item) => {
    setValue(item);

    if (item) {
      localStorage.setItem(key, JSON.stringify(item));
    } else {
      localStorage.removeItem(key);
    }
  };

  return [value, setItemToLocalStorage];
};
