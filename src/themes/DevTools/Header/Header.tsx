import React, { useCallback, useMemo, useContext } from "react";
import { Config as Configuration } from "../DevTools";
import { ThemeContext } from "styled-components";
import { themes } from "../../json";
import "../../interfaces/keyboardMap.d";

import {
  Header as Element,
  Options,
  Icons,
  Names,
  Input,
  Title,
} from "./styles";

import { Pin, Add, Palette } from "./styles/icons";

const actions: keyboardActionsMap<{ 13: Function }> = {
  13: (e: any, Theme: any, Config: any) =>
    Theme.Add(e.target.value, {}) && Config.set("addingTheme", false)(),
};

export default function Header() {
  const Config = useContext(Configuration);
  const { DevTools, ToggleDevTools, For } = useContext(ThemeContext);
  const Theme = For("DevTools");

  const handler = useCallback(
    (e: any) => actions[e.keyCode] && actions[e.keyCode](e, Theme, Config),
    [Theme, Config]
  );

  const names = useMemo(() => {
    return themes.map((name: string, index: number) => (
      <p
        onClick={() => Theme.Use(name)}
        key={index}
        className={String(Theme.Name !== name && "Damp")}
      >
        {name}
      </p>
    ));
  }, [Theme]);

  return (
    <Element>
      <Title onClick={Theme.Switch} onDoubleClick={ToggleDevTools}>
        <Palette /> {Theme.Name}
      </Title>

      {DevTools && (
        <>
          <Options>
            <Icons>
              <Pin onClick={ToggleDevTools} />
              <Add
                rotate={Config.addingTheme || undefined}
                onClick={Config.toggle("addingTheme")}
              />
            </Icons>

            <Names>{names}</Names>
          </Options>

          {Config.addingTheme && <Input onKeyUp={handler} autoFocus={true} />}

          <hr />
        </>
      )}
    </Element>
  );
}
