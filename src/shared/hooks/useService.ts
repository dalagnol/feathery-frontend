import { useState } from "react";

export default function useService(method: any, ...params: any) {
  const [value, setValue] = useState(null);

  const PromiseWrapper = async () => {
    const response = await method(...params);
    setValue(response);
  };

  PromiseWrapper();

  return value;
}
