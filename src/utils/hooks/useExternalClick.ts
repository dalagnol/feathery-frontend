import { useRef, useCallback, useEffect } from "react";

export default (handler: any, ...deps: any) => {
  const ref: any = useRef(null);
  const func = useCallback(handler, deps);
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      func(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, func]);

  return ref;
};
