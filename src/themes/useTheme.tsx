import { useEffect, useCallback, useContext } from "react";
import { ThemeContext } from "styled-components";
import { palette, ITheme } from "./Theme";

type ThemeHookReturn = {
  Name: string;
  Use: (name: palette) => boolean;
  Switch: () => boolean;
  Add: (theme: string, config: any) => boolean;
  Remove: (theme: string) => boolean;
  Set: (theme: string, property: string, value: string) => boolean;
  Themes: any;
};

export function useTheme(component: string, config?: ITheme): ThemeHookReturn {
  component = component.toLowerCase();

  const { Themes, For } = useContext(ThemeContext);
  const Theme = For(component);

  useEffect(
    useCallback(() => {
      Theme.Add(component, config || {});
    }, [Theme, component, config]),
    [Theme.Name]
  );

  useEffect(
    useCallback(() => {
      return () => Theme.Remove(component);
    }, [Theme, component]),
    []
  );

  return {
    ...Theme,
    Themes,
  } as ThemeHookReturn;
}
