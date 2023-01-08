import { useState } from "react";

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.stringify(item) : null;
  });

  const setItemToLocalStorage = (item) => {
    setValue(item);

    if (item) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  };

  return [value, setItemToLocalStorage];
};
