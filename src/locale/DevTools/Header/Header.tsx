import React, { useContext } from "react";
import { languages } from "../../json";
import { LocaleContext } from "../../useLocale";
import { U } from "../../helpers";

import {
  Header as Element,
  Options,
  Icons,
  Names,
  Title,
} from "./styles";

import { Pin, Globe } from "./styles/icons";

export default function Header() {
  const { Name, SwitchLang, Use, DevTools, ToggleDevTools } = useContext(
    LocaleContext
  );

  const names = () => {
    return languages.map((name: string, index: number) => (
      <p
        onClick={() => Use(name)}
        key={index}
        className={String(Name !== name && "Damp")}
      >
        {name}
      </p>
    ));
  };

  return (
    <Element>
      <Title onClick={SwitchLang} onDoubleClick={ToggleDevTools}>
        <Globe /> {U(Name)}
      </Title>

      {DevTools && (
        <>
          <Options>
            <Icons>
              <Pin onClick={ToggleDevTools} />
            </Icons>

            <Names>{names()}</Names>
          </Options>
          <hr />
        </>
      )}
    </Element>
  );
}
