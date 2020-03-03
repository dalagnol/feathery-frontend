import React, { useEffect, createContext, useContext } from "react";
import { languages } from "./json";
import { Load } from "./helpers";

type LocaleContextType = {
    Name: string;
    Languages: Array<string>;
    Use: (code: string) => void;
    Switch: () => void;
    Add: (component: string, config: any) => any;
    Remove: (component: string) => void;
    Dictionaries: any;
  };

export const LocaleContext = createContext({
    Name: Load("lang" || languages[0]),
    languages,
    Use() {},
    Switch() {},
    Add() {},
    Remove() {},
  });

  type LocaleReturn = ({...LocaleContextType}: LocaleContextType);

export function useLocale(component: string, dictionary: any) {
    component = component.toLowerCase();

    const Context = useContext(LocaleContext);

    useEffect(() => {
        Context.Add(component, dictionary);
        return () => Context.Remove(component);
        // eslint-disable-next-line
      }, [Context.Name]);

    return {
        languages
    }
}