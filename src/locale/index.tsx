import React, { useState } from "react";
import { observer } from "mobx-react";
import { Load, Save } from "./helpers";

import { LocaleContext } from "./useLocale";
import { languages } from "./json";

export * from "./useLocale";
export * from "./DevTools/DevTools";
export * from "./json";

const LS_DevTools = "locale_devtools";

export const Localised = observer(({ children }: any) => {
  const [Dictionaries, setDictionaries]: any = useState({});
  const [DevTools, SetDevTools] = useState(Load(LS_DevTools));
  const [Language, setLanguage] = useState(Load("lang") || languages[0]);

  const Switch = () => {
    const current = languages.indexOf(Language);
    const lang =
      current === languages.length - 1 ? languages[0] : languages[current + 1];

    setLanguage(lang);
    Save("language", lang);

    return true;
  };

  const Add = (component: string, config: any = {}) => {
    component = component.toLowerCase();

    setDictionaries({
      ...Dictionaries,
      [component]: config[Language],
    });

    return true;
  };

  const Remove = (component: string) => {
    component = component.toLowerCase();

    const newState = { ...Dictionaries };
    delete newState[component];
    setDictionaries(newState);

    return true;
  };

  const Set = (translation: string, component: string, string: string) => {
    component = component.toLowerCase();

    setDictionaries({
      ...Dictionaries,
      [component]: { ...Dictionaries[component], [string]: translation },
    });

    return true;
  };

  const Use = (code: string) => {
    code = code.toLowerCase();

    if (languages.includes(code)) {
      setLanguage(code);
      Save("language", code);

      return true;
    } else {
      return false;
    }
  };

  const ToggleDevTools = () => {
    SetDevTools(!DevTools);

    console.log(DevTools);

    Save(LS_DevTools, !DevTools);
  };

  return (
    <LocaleContext.Provider
      value={{
        Name: Language,
        Languages: languages,
        Use,
        SwitchLang: Switch,
        Add,
        Remove,
        Set,
        DevTools,
        ToggleDevTools,
        Dictionaries,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
});
