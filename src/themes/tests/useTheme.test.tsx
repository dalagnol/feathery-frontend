import React from "react";
import { Themed, useTheme } from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() => {
  const store: any = {};

  spyOn(localStorage, "getItem").and.callFake((key: string) =>
    store[key] !== undefined ? store[key] : null
  );
  spyOn(localStorage, "setItem").and.callFake(
    (key: string, value: any) => (store[key] = value)
  );
  spyOn(localStorage, "removeItem").and.callFake(
    (key: string) => delete store[key]
  );
});

const testTheme = {
  light: { bckg: "white" },
  dark: { bckg: "black" },
};

const Component = () => {
  const { Name, Use, Switch, Add, Remove, Set, Themes } = useTheme(
    "initial",
    testTheme
  );

  return (
    <div>
      <div data-testid="Name">{Name}</div>
      <div data-testid="Use" onClick={() => Use("dark")} />
      <div data-testid="Switch" onClick={Switch} />
      <div data-testid="Add" onClick={() => Add("Testing", testTheme)} />
      <div data-testid="Remove" onClick={() => Remove("initial")} />
      <div
        data-testid="Set"
        onClick={() => Set("initial", "Adimo", "Potestas")}
      />
      <div data-testid="Themes">{JSON.stringify(Themes)}</div>
    </div>
  );
};

describe("Theming", () => {
  it("inits on light", () => {
    const { getByTestId } = render(
      <Themed>
        <Component />
      </Themed>
    );

    expect(getByTestId("Name")).toHaveTextContent("light");
  });

  it("does not automatically affect localStorage", () => {
    expect(localStorage.getItem("theme")).toBe(null);
  });

  it("returns a working Use method", () => {
    const { getByTestId } = render(
      <Themed>
        <Component />
      </Themed>
    );

    getByTestId("Use").click();

    expect(getByTestId("Name")).toHaveTextContent("dark");
    expect(localStorage.getItem("theme")).toBe("dark");

    getByTestId("Name").click();
    expect(document.body.style.backgroundColor).toBe("black");
  });

  it("restores theme off localStorage", () => {
    const { getByTestId } = render(
      <Themed>
        <Component />
      </Themed>
    );

    expect(getByTestId("Name")).toHaveTextContent("dark");
  });

  it("returns a working Switch method", () => {
    const { getByTestId } = render(
      <Themed>
        <Component />
      </Themed>
    );

    getByTestId("Switch").click();

    expect(getByTestId("Name")).toHaveTextContent("light");
    expect(localStorage.getItem("theme")).toBe("light");

    getByTestId("Name").click();
    expect(document.body.style.backgroundColor).toBe("white");
  });

  it("returns a working Add method", () => {
    const { getByTestId } = render(
      <Themed>
        <Component />
      </Themed>
    );

    getByTestId("Add").click();

    expect(getByTestId("Themes")).toHaveTextContent(
      JSON.stringify({ initial: testTheme.light, testing: testTheme.light })
    );
  });

  it("returns a working Remove method", () => {
    const { getByTestId } = render(
      <Themed>
        <Component />
      </Themed>
    );

    getByTestId("Remove").click();

    expect(getByTestId("Themes")).toHaveTextContent("{}");
  });

  it("has the component react to themes", () => {
    const { getByTestId } = render(
      <Themed>
        <Component />
      </Themed>
    );

    getByTestId("Switch").click();
    getByTestId("Name").click();

    expect(getByTestId("Themes")).toHaveTextContent(
      JSON.stringify({ initial: testTheme.dark })
    );
  });

  it("sets properties on the fly", () => {
    const { getByTestId } = render(
      <Themed>
        <Component />
      </Themed>
    );

    getByTestId("Set").click();
    getByTestId("Name").click();

    expect(getByTestId("Themes")).toHaveTextContent(
      JSON.stringify({ initial: { ...testTheme.dark, Adimo: "Potestas" } })
    );
  });
});

// test("toggles to dark", () => {});
