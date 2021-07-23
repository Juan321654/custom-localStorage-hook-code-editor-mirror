import { useEffect, useState } from "react";

const PREFIX = "bowery-software-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];

  // usage
  // import useLocalStorage from 'helpers/useLocalStorage'

  // function App(){
  // const [something, setSomething] = useLocalStorage('html','')         html = key,  '' = initial value
  // return ()
  // }
}
