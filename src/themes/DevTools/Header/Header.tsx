import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { themes } from "../../json";

import {
  Header as Element,
  Options,
  Icons,
  Names,
  Input,
  Title,
} from "./styles";

import { Pin, Add, Palette } from "./styles/icons";

import { Config as ConfigurationContext } from "../DevTools";

export default function Header() {
  const Config = useContext(ConfigurationContext);
  const { DevTools, ToggleDevTools, For } = useContext(ThemeContext);
  const Theme = For("DevTools");

  const handler = (e: any) => {
    if (e.keyCode === 13) {
      Theme.Add(e.target.value, {});
      Config.set("addingTheme", false)();
    }
  };

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

            <Names>
              {themes.map((name: string, index: number) => (
                <p
                  onClick={() => Theme.Use(name)}
                  key={index}
                  className={String(Theme.Name !== name && "Damp")}
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
    </Element>
  );
}
