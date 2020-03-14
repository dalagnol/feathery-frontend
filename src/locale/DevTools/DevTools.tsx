import React, { useState, useEffect, createContext, useContext } from "react";
import { LocaleContext } from "../useLocale";

import { Load, Save } from "../helpers";

import { Container } from "./styles";

import Header from "./Header/Header";
import Contexts from "./Contexts/Contexts";

const LS = "locale_devtools_state";

export const Config = createContext(
  Load(LS, {
    contexts: {},
    code: "",
  })
);

export function DevTools() {
  const { DevTools, Dictionaries } = useContext(LocaleContext);
  const [ConfigState, SetConfigState] = useState(
    Load(LS, {
      contexts: {},
      code: "",
    })
  );

  const set = (state: string, value: boolean | string) => () =>
    SetConfigState({ ...ConfigState, [state]: value });
 
  const toggle = (state: string) => () =>
    SetConfigState({ ...ConfigState, [state]: !ConfigState[state] });

  const toggleContextValue = (
    name: string,
    property: string,
    value?: boolean
  ) => () =>
    SetConfigState({
      ...ConfigState,
      contexts: {
        ...ConfigState.contexts,
        [name]: {
          ...ConfigState.contexts[name],
          [property]:
            typeof value !== "undefined"
              ? value
              : !ConfigState.contexts[name][property],
        },
      },
    });

  useEffect(() => {
    const newState: any = {};

    Object.entries(Dictionaries).forEach(
      ([context, variables]: [string, any]) => {
        if (ConfigState.contexts[context]) {
          newState[context] = { ...ConfigState.contexts[context] };
        } else {
          newState[context] = {
            open: !Object.entries(variables || {}).length,
            addingProperty: !Object.entries(variables || {}).length,
          };
        }
      }
    );

    SetConfigState({ ...ConfigState, contexts: newState });
    // eslint-disable-next-line
  }, [Dictionaries]);

  if (ConfigState) {
    Save(LS, ConfigState);
  }

  return (
    <Config.Provider value={{ ...ConfigState, set, toggle, toggleContextValue }}>
      <Container open={DevTools}>
        <Header />
        {DevTools && (
          <>
            <div>
              <Contexts />
            </div>
          </>
        )}
      </Container>
    </Config.Provider>
    
  );
}
