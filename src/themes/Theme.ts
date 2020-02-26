import { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

export function Theme(component: string, config: any) {
  const Context = useContext(ThemeContext);
  useEffect(() => {
    Context.Add(component, config);
    return () => Context.Remove(component);
    // eslint-disable-next-line
  }, [Context.Name]);

  return Context;
}
