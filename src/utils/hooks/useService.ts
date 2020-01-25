import { useState } from "react";
import { errorSwitch } from "utils/helpers";

export default function useService({ method, params, handler, errors }: any) {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const PromiseWrapper = async () => {
    setLoading(true);
    try {
      const data = await method(...params);
      handler(data);
      setValue(data);
    } catch (oof) {
      errorSwitch(oof, errors);
    }
    setLoading(false);
  };

  return [value, loading, PromiseWrapper];
}
