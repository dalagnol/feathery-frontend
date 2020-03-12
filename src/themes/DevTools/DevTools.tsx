import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo
} from "react";

import { Load, Save } from "../helpers";
import { ThemeContext } from "styled-components";

import { Container, Code } from "./styles";

import Header from "./Header/Header";
import Contexts from "./Contexts/Contexts";
import History from "./History/History";

const LS = "theme_devtools_state";

export const Config = createContext(
  Load(LS, {
    addingTheme: false,
    history: true,
    contexts: {},
    filter: {
      SYSTEM: true,
      INFO: false,
      ERROR: false,
      WARNING: false,
      FILTER: false
    },
    code: ""
  })
);

export function DevTools() {
  const { DevTools, Themes } = useContext(ThemeContext);
  const [ConfigState, SetConfigState] = useState(
    Load(LS, {
      addingTheme: false,
      history: true,
      contexts: {},
      filter: {
        SYSTEM: true,
        INFO: false,
        ERROR: false,
        WARNING: false,
        FILTER: false
      },
      code: ""
    })
  );

  const set = useCallback(
    (state: string, value: boolean | string) => () =>
      SetConfigState({ ...ConfigState, [state]: value }),
    [ConfigState]
  );

  const toggle = useCallback(
    (state: string) => () =>
      SetConfigState({ ...ConfigState, [state]: !ConfigState[state] }),
    [ConfigState]
  );

  const toggleContextValue = useCallback(
    (name: string, property: string, value?: boolean) => () =>
      SetConfigState({
        ...ConfigState,
        contexts: {
          ...ConfigState.contexts,
          [name]: {
            ...ConfigState.contexts[name],
            [property]:
              typeof value !== "undefined"
                ? value
                : !ConfigState.contexts[name][property]
          }
        }
      }),
    [ConfigState]
  );

  const toggleFilter = useCallback(
    (name: string) => () =>
      SetConfigState({
        ...ConfigState,
        filter: { ...ConfigState.filter, [name]: !ConfigState.filter[name] }
      }),
    [ConfigState]
  );

  useEffect(
    useCallback(() => {
      const newState: any = {};

      Object.entries(Themes).forEach(([context, variables]: [string, any]) => {
        if (ConfigState.contexts[context]) {
          newState[context] = { ...ConfigState.contexts[context] };
        } else {
          newState[context] = {
            open: !Object.entries(variables || {}).length,
            addingProperty: !Object.entries(variables || {}).length
          };
        }
      });

      SetConfigState({ ...ConfigState, contexts: newState });
      // eslint-disable-next-line
    }, [Themes, ConfigState]),
    [Themes]
  );

  useMemo(() => {
    if (ConfigState) {
      Save(LS, ConfigState);
    }
  }, [ConfigState]);

  return (
    <Config.Provider
      value={{ ...ConfigState, set, toggle, toggleContextValue, toggleFilter }}
    >
      <Container open={DevTools}>
        <Header />
        {DevTools && (
          <>
            <div>
              <Contexts history={ConfigState.history} />
            </div>

            <div>
              <History open={ConfigState.history} toggle={toggle("history")} />
            </div>
          </> 
        )}
      </Container>

      {ConfigState.code && (
        <Code onDoubleClick={set("code", "")}>
          <p>{ConfigState.code}</p>
        </Code>
      )}
    </Config.Provider>
  );
}
