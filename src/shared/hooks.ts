import { useEffect } from "react";

export function useAlertOnMountEvents() {
  useEffect(() => {
    alert("montei");

    return () => alert("desmontei");
  });
}
