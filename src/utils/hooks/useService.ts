import { useState } from "react";
import { errorSwitch } from "utils/helpers";

import Locale from "locale";

const Dictionary = {
  en: {
    unknown: "An unknown error happened",
  },
  pt: {
    unknown: "Um erro desconhecido aconteceu",
  },
};

type UseService = [any, boolean, Function, string];

export default function useService({
  method,
  params,
  handler,
  errors,
}: any): UseService {
  const { unknown } = Locale.use(Dictionary);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const PromiseWrapper = async () => {
    setLoading(true);
    try {
      const data = await method(...params);
      handler(data);
      setValue(data);
    } catch (oof) {
      setError(oof?.response?.data?.message || unknown);
      errorSwitch(oof, errors);
    }
    setLoading(false);
  };

  return [value, loading, PromiseWrapper, error];
}
