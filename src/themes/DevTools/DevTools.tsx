import React, { useState, useContext } from "react";
import { Container } from "./styles/DevTools";
import { ThemeContext } from "styled-components";

import Collection from "./Collection/Collection";
import History from "./History/History";

const LS_LOCK = "theme_devtools_lock";
const LS_HISTORY = "theme_devtools_history";

export function DevTools() {
  const [lock, setLock] = useState(!!localStorage.getItem(LS_LOCK));
  const [history, setHistory] = useState(!!localStorage.getItem(LS_HISTORY));
  const Context = useContext(ThemeContext);

  const lockToggle = () => {
    if (!lock) {
      localStorage.setItem(LS_LOCK, "1");
    } else {
      localStorage.removeItem(LS_LOCK);
    }
    setLock(!lock);
  };

  const historyToggle = () => {
    if (!history) {
      localStorage.setItem(LS_HISTORY, "1");
    } else {
      localStorage.removeItem(LS_HISTORY);
    }
    setHistory(!history);
  };

  const ContextEntries = Object.entries(Context).filter(
    ([key]: any) => key.toLowerCase() === key
  );

  return (
    <Container onClick={lockToggle} lock={lock}>
      <div onClick={e => e.stopPropagation()}>
        <div className={"Header"}>
          <h1 onClick={() => Context.SwitchTheme("DevTools")}>
            Theme: {Context.Name}
          </h1>
          <p>
            {Context.Themes.map((theme: string, index: number) => (
              <span
                key={index}
                onClick={() => Context.SetName(theme, "DevTools")}
                className={(theme !== Context.Name && "Damp") || "None"}
              >
                {theme}
              </span>
            ))}
          </p>
          <hr />
        </div>

        <div className={"Collections"}>
          {ContextEntries.map(
            ([collection, variables]: [string, any], index: number) => (
              <Collection
                key={index}
                initialOpen={ContextEntries.length < 5}
                title={collection}
                data={variables}
              />
            )
          )}
        </div>

        <div className={"History"}>
          <h2 onClick={historyToggle}>History</h2>
          <History open={history} />
        </div>
      </div>
    </Container>
  );
}
