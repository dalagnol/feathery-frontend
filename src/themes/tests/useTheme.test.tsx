import React from "react";
import { Themed, useTheme } from "../index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

let getByTestId;
let Name;
let Use;
let Switch;
let Add;
let Remove;
let Set;
let Themes;

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

beforeEach(() => {
  getByTestId = render(
    <Themed>
      <Component />
    </Themed>
  ).getByTestId;

  Name = getByTestId("Name");
  Use = getByTestId("Use");
  Switch = getByTestId("Switch");
  Add = getByTestId("Add");
  Remove = getByTestId("Remove");
  Set = getByTestId("Set");
  Themes = getByTestId("Themes");
});

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

describe("Theming", () => {
  it("inits on light", () => {
    expect(Name).toHaveTextContent("light");
  });

  it("does not automatically affect localStorage", () => {
    expect(localStorage.getItem("theme")).toBe(null);
  });

  it("returns a working Use method", () => {
    act(() => {
      Use.click();
    });

    expect(Name).toHaveTextContent("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.body.style.backgroundColor).toBe("black");
  });

  it("restores theme off localStorage", () => {
    expect(Name).toHaveTextContent("dark");
  });

  it("returns a working Switch method", () => {
    act(() => {
      Switch.click();
    });

    expect(Name).toHaveTextContent("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.body.style.backgroundColor).toBe("white");
  });

  it("returns a working Add method", () => {
    act(() => {
      Add.click();
    });

    expect(Themes).toHaveTextContent(
      JSON.stringify({ initial: testTheme.light, testing: testTheme.light })
    );
  });

  it("returns a working Remove method", () => {
    act(() => {
      Remove.click();
    });

    expect(Themes).toHaveTextContent("{}");
  });

  it("has the component react to themes", () => {
    act(() => {
      Switch.click();
    });

    expect(Themes).toHaveTextContent(
      JSON.stringify({ initial: testTheme.dark })
    );
  });

  it("sets properties on the fly", () => {
    act(() => {
      Set.click();
    });

    expect(Themes).toHaveTextContent(
      JSON.stringify({ initial: { ...testTheme.dark, Adimo: "Potestas" } })
    );
  });
});
