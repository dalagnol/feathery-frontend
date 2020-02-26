import React, { useEffect, createContext, useContext } from "react";
import { observer } from "mobx-react";
import { observable, toJS } from "mobx";

const Languages: Array<string> = ["en", "pt"];

class Engine {
  @observable private Language = localStorage.getItem("lang") || "en";
  @observable private Dictionaries: any = {};

  public get language() {
    return this.Language;
  }

  public set language(code: string) {
    if (Languages.includes(code)) {
      this.Language = code;
    }
  }

  public switchLanguage() {
    const current = Languages.indexOf(this.Language);
    this.language =
      Languages[current + 1 === Languages.length ? 0 : current + 1];
  }

  public add(component: string, config: any) {
    this.Dictionaries = {
      ...this.Dictionaries,
      [component]: config[this.language],
    };

    return this.Dictionaries[component]?.[this.language];
  }

  public remove(component: string) {
    delete this.Dictionaries[component];
  }

  public get dictionaries() {
    return toJS(this.Dictionaries);
  }
}

const engine = new Engine();

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

export const Localised = observer(({ children }: any) => {
  return (
    <LocaleContext.Provider
      value={{
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
        ...engine.dictionaries,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
});
