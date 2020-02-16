import { useState, useEffect } from "react";

interface Options {
  offset?: number;
  effectOnBothEdges?: boolean;
  initialState?: boolean;
  effect?: Function;
}

export default (time: number, options?: Options | Function) => {
  const offset = (typeof options !== "function" && options?.offset) || 0;
  const effectOnBothEdges =
    typeof options !== "function" &&
    typeof options?.effectOnBothEdges === "boolean"
      ? options.effectOnBothEdges
      : true;
  const initialState =
    (typeof options !== "function" && options?.initialState) || false;
  const effect =
    (typeof options !== "function" && options?.effect) ||
    (typeof options === "function" && options) ||
    undefined;

  const [state, setState] = useState(initialState);
  const [current, setCurrent] = useState(false);
  const [enabled, setEnabled] = useState(offset);

  useEffect(() => {
    if (current) {
      setTimeout(
        () => {
          if (effect) {
            effect();
          }
          setCurrent(false);
          setState(!state);
        },
        state ? time : 1
      );
    } else {
      if (effectOnBothEdges) {
        setTimeout(() => {
          if (effect) {
            effect();
          }
        }, time);
      }
    }
    // eslint-disable-next-line
  }, [effect, time, current]);

  const trigger = () =>
    enabled >= 0 ? setCurrent(true) : setEnabled(enabled + 1);

  return [current, trigger, state] as any;
};
