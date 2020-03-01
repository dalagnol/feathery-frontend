import React, { useState, useContext } from "react";
import { Load, Save } from "../helpers";
import { ThemeContext } from "styled-components";
import { themes } from "../json";

import {
  Container,
  Header,
  Title,
  Icons,
  Names,
  Options,
  Input,
} from "./styles";

import { Pin, Add, Palette } from "./styles/icons";

import Contexts from "./Contexts/Contexts";
import History from "./History/History";

const LS = "theme_devtools_state";

export function DevTools() {
  const { Name, DevTools, ToggleDevTools, For } = useContext(ThemeContext);
  const Theme = For("DevTools");
  const [Config, SetConfig] = useState(
    Load(LS, {
      addingTheme: false,
      history: true,
    })
  );

  const set = (state: string, value: boolean) => () => {
    const State = { ...Config, [state]: value };
    SetConfig(State);

    Save(LS, State);
  };

  const toggle = (state: string) => () => {
    const State = { ...Config, [state]: !Config[state] };
    SetConfig(State);

    Save(LS, State);
  };

  const handler = (e: any) => {
    if (e.keyCode === 13) {
      Theme.Add(e.target.value, {});
      set("addingTheme", false)();
    }
  };

  return (
    <Container open={DevTools}>
      <Header>
        <Title onClick={Theme.Switch} onDoubleClick={ToggleDevTools}>
          <Palette /> {Theme.Name}
        </Title>

        {DevTools && (
          <>
            <Options>
              <Icons>
                <Pin onClick={ToggleDevTools} />
                <Add
                  rotate={Config.addingTheme}
                  onClick={toggle("addingTheme")}
                />
              </Icons>

              <Names>
                {themes.map((name: string, index: number) => (
                  <p
                    onClick={() => Theme.Use(name)}
                    key={index}
                    className={String(Name !== name && "Damp")}
                  >
                    {name}
                  </p>
                ))}
              </Names>
            </Options>

            {Config.addingTheme && <Input onKeyUp={handler} autoFocus={true} />}

            <hr />
          </>
        )}
      </Header>

      {DevTools && (
        <>
          <div>
            <Contexts history={Config.history} />
          </div>

          <div>
            <History open={Config.history} toggle={toggle("history")} />
          </div>
        </>
      )}
    </Container>
  );
}
