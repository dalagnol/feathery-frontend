import React, { useState, useEffect, useContext } from "react";
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
  Pin,
  Add,
  Palette,
  Input,
} from "./styles";

const LS = "theme_devtools_state";

type config = {
  [x: string]: any;
  mini: boolean;
};

export function DevTools() {
  const { DevTools, ToggleDevTools, For } = useContext(ThemeContext);
  const Theme = For("DevTools");
  const [Config, SetConfig] = useState(
    Load(LS, {
      addingTheme: false,
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

  return (
    <Container onDoubleClick={ToggleDevTools} open={DevTools}>
      <Header>
        <Title onClick={Theme.Switch} onDoubleClick={set("mini", true)}>
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
                  <p onClick={() => Theme.Use(name)} key={index}>
                    {name}
                  </p>
                ))}
              </Names>
            </Options>

            {Config.addingTheme && <Input autoFocus={true} />}

            <hr />
          </>
        )}
      </Header>
    </Container>
  );
}
