import { useState, useEffect } from "react";

export default function useTimer(time: number) {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    if (time && timer) {
      setTimeout(() => {
        setTimer(false);
      }, time);
    }
  }, [timer]);

  const trigger = () => setTimer(true);

  return [timer, trigger];
}
