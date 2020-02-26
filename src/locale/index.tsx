import React from "react";
import { observer } from "mobx-react";

import { LocaleContext } from "./Locale";
import { Languages } from "./json";

import engine from "./engine";

export * from "./Locale";
export * from "./json";
export * from "./DevTools";

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
