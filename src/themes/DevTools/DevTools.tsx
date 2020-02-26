import React, { useState, useContext } from "react";
import { Container } from "./styles/DevTools";
import { ThemeContext } from "styled-components";
import Collection from "./Collection/Collection";

const LS_LOCK = "theme_devtools_lock";

export function DevTools() {
  const [lock, setLock] = useState(!!localStorage.getItem(LS_LOCK));
  const Context = useContext(ThemeContext);

  const lockToggle = () => {
    if (!lock) {
      localStorage.setItem(LS_LOCK, "1");
    } else {
      localStorage.removeItem(LS_LOCK);
    }
    setLock(!lock);
  };

  const ContextEntries = Object.entries(Context).filter(
    ([key]: any) => key.toLowerCase() === key
  );

  return (
    <Container onClick={lockToggle} lock={lock}>
      <div onClick={e => e.stopPropagation()}>
        <div className={"Header"}>
          <h1 onClick={Context.SwitchTheme}>Theme: {Context.Name}</h1>
          <p>
            {Context.Themes.map((theme: string, index: number) => (
              <span
                key={index}
                onClick={() => Context.SetName(theme)}
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
      </div>
    </Container>
  );
}
