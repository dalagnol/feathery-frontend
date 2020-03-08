import { useEffect, createContext, useContext } from "react";
import { languages } from "./json";

type LocaleContextType = {
  l: Function;
  Name: string;
  Languages: Array<string>;
  Use: (code: string) => void;
  Switch: () => void;
  Add: (component: string, config: any) => any;
  Remove: (component: string) => void;
  Dictionaries: any;
};

export const LocaleContext = createContext<LocaleContextType>({
  l() {},
  Name: "",
  Languages: languages,
  Use() {},
  Switch() {},
  Add() {},
  Remove() {},
  Dictionaries: [],
});

// type LocaleReturn = ({...LocaleContextType}: LocaleContextType);

export function useLocale(component: string, dictionary: any) {
  component = component.toLowerCase();

  const Context = useContext(LocaleContext);

  useEffect(() => {
    Context.Add(component, dictionary);
    return () => Context.Remove(component);
    // eslint-disable-next-line
  }, [Context.Name]);

  return {
    ...Context,
  };
}
