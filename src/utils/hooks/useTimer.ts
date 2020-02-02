import { useState, useEffect } from "react";

export default (time: number, options?: any) => {
  const effect = options?.effect || function() {};
  const offset = options?.offset || 0;

  const [current, setCurrent] = useState(false);
  const [enabled, setEnabled] = useState(offset);

  useEffect(() => {
    if (current) {
      setTimeout(() => {
        effect();
        setCurrent(false);
      }, time);
    }
  }, [effect, time, current]);

  const trigger = () =>
    enabled >= 0 ? setCurrent(true) : setEnabled(enabled + 1);

  return [current, trigger] as any;
};
