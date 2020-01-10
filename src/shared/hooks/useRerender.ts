import { useState, useCallback } from "react";

export default function useRerender() {
  const [, setForceRender] = useState(Math.random());
  const refresh = useCallback(() => setForceRender(Math.random()), []);
  return refresh;
}
