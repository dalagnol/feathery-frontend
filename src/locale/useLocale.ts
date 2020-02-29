import { useEffect, createContext, useContext } from "react";
import { Languages } from "./json";
import engine from "./engine";

type LocaleContextType = {
  Languages: Array<string>;
  Lang: string;
  SetLanguage: (code: string) => void;
  SwitchLanguage: () => void;
  Add: (component: string, config: any) => any;
  Remove: (component: string) => void;
};

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

type LocaleReturn = [(string: string) => string, LocaleContextType];

export function useLocale(component: string, dictionary: any): LocaleReturn {
  const Context = useContext(LocaleContext);

  useEffect(() => {
    Context.Add(component, dictionary);
    return () => Context.Remove(component);
    // eslint-disable-next-line
  }, [Context.Lang]);

  return [
    function(string: string): string {
      const res = engine.dictionaries?.[component]?.[string];
      return res || string;
    },
    Context,
  ];
}
