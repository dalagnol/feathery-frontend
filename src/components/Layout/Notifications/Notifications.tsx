import React from "react";
import { observer } from "mobx-react";
import { useExternalClick } from "utils/hooks";

import { Background, Container, Popup, ArrowUp, Text } from "./styles";

export default observer(function Pane({ close, open, closing }: any) {
  const ref = useExternalClick(() => close());

  return (
    open && (
      <Background closing={closing}>
        <Container>
          <ArrowUp closing={closing} open={open} />
          <Popup ref={ref} closing={closing} SettingsOpen={open}>
            <Text>AHHHH</Text>
          </Popup>
        </Container>
      </Background>
    )
  );
});
