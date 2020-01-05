import { useState, useCallback } from "react";

export function useRerender() {
  const [, setForceRender] = useState(Math.random());
  const refresh = useCallback(() => setForceRender(Math.random()), []);
  return refresh;
}

export function useService(method: any, ...params: any) {
  const [value, setValue] = useState(null);

  const PromiseWrapper = async () => {
    const response = await method(...params);
    setValue(response);
  };

  PromiseWrapper();

  return value;
}
