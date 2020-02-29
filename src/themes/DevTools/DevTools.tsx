import React, { useState, useEffect, useContext } from "react";
import { Load, Save } from "../helpers";
import { ThemeContext } from "styled-components";

import { Container, Header, Title } from "./styles";
import { Pin, Trash } from "styled-icons/entypo";
import { Add, Palette } from "styled-icons/material";

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
      mini: true,
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

  useEffect(() => {
    set("mini", !DevTools)();
  }, [DevTools]);

  return (
    <Container
      onDoubleClick={ToggleDevTools}
      mini={Config.mini}
      open={DevTools}
    >
      <Header mini={Config.mini}>
        <Title onClick={Theme.Switch} onDoubleClick={set("mini", true)}>
          <Palette size={48} /> {Theme.Name}
        </Title>
        {!Config.mini && (
          <>
            <hr />
          </>
        )}
      </Header>
    </Container>
  );
}
