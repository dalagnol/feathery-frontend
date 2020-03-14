import React, { useContext } from "react";
import { LocaleContext } from "../../useLocale";

import { Container } from "./styles";

import Context from "./Context/Context";

export default function Contexts() {
  const { Dictionaries } = useContext(LocaleContext);

  const contexts = () => {
    const Contexts = Object.entries(Dictionaries).filter(
      ([key]: any) => key.toLowerCase() === key
    );

    return Contexts.map(([name, variables]: [string, any], index: number) => (
      <Context key={index} name={name} data={variables} />
    ));
  };

  console.log(contexts(), Dictionaries);

  return <Container>{contexts()}</Container>;
}
