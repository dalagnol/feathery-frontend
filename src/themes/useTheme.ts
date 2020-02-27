import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

type ThemeHookReturn = [
  string,
  {
    SetName: (name: string) => boolean;
    SwitchTheme: () => boolean;
    Add: (element: string, config: any) => boolean;
    Remove: (element: string) => boolean;
    Set: (element: string, property: string, value: string) => boolean;
  }
];

export function useTheme(component: string, config: any): ThemeHookReturn {
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
