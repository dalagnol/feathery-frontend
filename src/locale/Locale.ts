import { useEffect, createContext, useContext } from "react";
import { Languages } from "./json";
import engine from "./engine";

export const LocaleContext = createContext({
  Languages,
  Lang: engine.language,
  SetLanguage(code: string) {
    engine.language = code;
  },
  SwitchLanguage() {
    engine.switchLanguage();
  },
  Add(component: string, config: any) {
    return engine.add(component, config);
  },
  Remove(component: string) {
    engine.remove(component);
  },
});

export function Locale(component: string, dictionary: any) {
  const { Lang, Add, Remove } = useContext(LocaleContext);

  useEffect(() => {
    Add(component, dictionary);
    return () => Remove(component);
  }, [Lang]);

  return function(string: string): string {
    const res = engine.dictionaries?.[component]?.[string];
    return res || string;
  };
}
