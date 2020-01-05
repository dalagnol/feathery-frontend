import React from "react";

import App from "./App";
import Locale from "locale";

import { render } from "@testing-library/react";

import { mount } from "enzyme";

describe("The App Component", () => {
  beforeAll(() => {
    Locale.language = "en";
  });

  it("renders", () => {
    const { getByText } = render(<App />);
    const proofOfRender = getByText("Welcome");
    expect(proofOfRender).toBeInTheDocument();
  });

  it("can be debugged, although only on enzyme!", () => {
    const Wrapper = mount(<App />);
    console.log(Wrapper.debug());

    expect(2 + 2).toBe(4);
  });
});
