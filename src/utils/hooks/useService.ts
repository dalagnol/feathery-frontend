import { useState } from "react";

type UseService = [
  { data: any; loading: boolean },
  { setData: Function; request: Function }
];

export default function useService(
  method: any,
  params: Array<any> = [],
  effect?: any
): UseService {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = function() {
    (async function() {
      setLoading(true);
      const response = await method(params);
      if (effect) {
        effect(response);
      }
      setData(response);
      setLoading(false);
    })();
  };

  return [
    { data, loading },
    { setData, request },
  ];
}
