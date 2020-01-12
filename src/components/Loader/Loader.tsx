import React from "react";

import { Box } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Overlay } from "components";

export default function Loader() {
  return (
    <Overlay>
      <Box>
        <FontAwesomeIcon spin size={"7x"} icon={faSpinner} />
      </Box>
    </Overlay>
  );
}
