import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

export function Theme(component: string, config: any, agent = "") {
  const [first, setFirst] = useState(true);
  const Context = useContext(ThemeContext);

  useEffect(() => {
    Context.Add(component, config, first ? agent : "DevTools");
    setFirst(false);
    return () => Context.Remove(component);
    // eslint-disable-next-line
  }, [Context.Name]);

  return [Context.Name, Context];
}
