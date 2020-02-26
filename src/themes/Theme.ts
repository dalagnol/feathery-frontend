import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

export function Theme(component: string, config: any) {
  const [first, setFirst] = useState(true);
  const Context = useContext(ThemeContext);
  const componentName = `<${component
    .substring(0, 1)
    .toUpperCase()}${component.substring(1).toLowerCase()} />`;

  useEffect(() => {
    Context.Add(component, config, first ? componentName : "DevTools");
    setFirst(false);
    return () => Context.Remove(component);
    // eslint-disable-next-line
  }, [Context.Name]);

  return [Context.Name, Context.ForComponent(componentName)];
}
