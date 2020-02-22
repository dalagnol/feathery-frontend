import { useRef, useCallback, useEffect } from "react";

export function useExternalClick(handler: any, lock = false, ...deps: any) {
  const ref: any = useRef(null);
  const func = useCallback(handler, deps);
  useEffect(() => {
    if (!lock) {
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
    }
  }, [ref, func]);

  return ref;
}
