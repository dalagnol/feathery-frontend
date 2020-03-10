import { useEffect, createContext, useContext } from "react";
import { languages } from "./json";

type Dictionary = {
  code: string;
  translation: any;
};

type LocaleContextType = {
  Name: string;
  Languages: Array<string>;
  Use: (code: string) => void;
  SwitchLang: () => void;
  Add: (component: string, config: any) => any;
  Remove: (component: string) => void;
  Dictionaries: {
    [key: string] : any;
  };
};

export const LocaleContext = createContext<LocaleContextType>({
  Name: "",
  Languages: languages,
  Use() {},
  SwitchLang() {},
  Add() {},
  Remove() {},
  Dictionaries: {},
});

// type LocaleReturn = ({...LocaleContextType}: LocaleContextType);

export function useLocale(component: string, dictionary: any) {
  component = component.toLowerCase();

  const Context = useContext(LocaleContext);

  const l = (string: string) => {
    const res = Context.Dictionaries?.[component]?.[string];
    console.log(Context);
    return res || string;
  };

  useEffect(() => {
    Context.Add(component, dictionary);
    return () => Context.Remove(component);
    // eslint-disable-next-line
  }, [Context.Name]);

  return {
    l,
    ...Context,
  };
}
