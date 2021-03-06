import React from "react";
import { observer } from "mobx-react";

import { LocaleContext } from "./useLocale";
import { Languages } from "./json";

import engine from "./engine";

export * from "./useLocale";
export * from "./DevTools";
export * from "./json";

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
