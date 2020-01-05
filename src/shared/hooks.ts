import { useState, useEffect, useCallback } from "react";

export function useAlertOnMountEvents() {
  useEffect(() => {
    alert("montei");

    return () => alert("desmontei");
  });
}

export function useRerender() {
  const [, setForceRender] = useState(Math.random());
  const refresh = useCallback(() => setForceRender(Math.random()), []);
  return refresh;
}
