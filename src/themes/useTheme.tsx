import { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { palette, ITheme } from "./Theme";

type ThemeHookReturn = {
  Name: string;
  Use: (name: palette) => boolean;
  Switch: () => boolean;
  Add: (theme: string, config: any) => boolean;
  Remove: (theme: string) => boolean;
  Set: (theme: string, property: string, value: string) => boolean;
};

export function useTheme(component: string, config: ITheme): ThemeHookReturn {
  component = component.toLowerCase();

  const { For } = useContext(ThemeContext);
  const Theme = For(component);

  useEffect(() => {
    Theme.Add(component, config);

    return () => Theme.Remove(component);
    // eslint-disable-next-line
  }, [Theme.Name]);

  return Theme as ThemeHookReturn;
}
