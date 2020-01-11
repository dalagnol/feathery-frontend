import React from "react";
import { ThemeProvider } from "styled-components";
import { timeIsBetween } from "./../shared/helpers";

import { Language } from "locale/interfaces/language";

import ITheme from "./interfaces/Theme";
import IThemeEnum from "./interfaces/Themes";
import { ThemeName as Name, ThemeNames as Names } from "./interfaces/ThemeName";
import { ThemeProperty } from "./interfaces/ThemeProperty";

import Light from "./Light";
import Dark from "./Dark";

export { Light, Dark };

const Themes: IThemeEnum = {
  Light: Light.Theme,
  Dark: Dark.Theme,
};

const Locales: IThemeEnum = {
  Light: Light.Dictionary,
  Dark: Dark.Dictionary,
};

interface ProviderProps {
  children: any;
}

const Theme = new (class ThemeEngine {
  private Theme: Name = Names[0];

  constructor() {
    /** To implement later: theme stored in user's preferences */
    // const user: any = localStorage.getItem("user");
    const LSTheme: string | null = localStorage.getItem("theme");

    if (LSTheme !== "Light" && LSTheme !== "Dark") {
      return;
    }

    if (LSTheme) {
      this.theme = LSTheme;
    } else {
      this.theme = timeIsBetween("07:30", "18:00") ? "Light" : "Dark";
    }
  }

  public get theme() {
    return this.Theme;
  }

  public set theme(name: Name) {
    if (Object.keys(Themes).includes(name)) {
      localStorage.setItem("theme", name);
      this.Theme = name;
      document.querySelector("body")!.style.backgroundColor = this.d.primary;
    }
  }

  public next(theme: Name = this.Theme) {
    const currentThemeIndex = Names.indexOf(theme);
    const resultingTheme: Name =
      currentThemeIndex === Names.length - 1
        ? Names[0]
        : Names[currentThemeIndex + 1];

    return {
      localised: (property: ThemeProperty, locale: Language = "en"): string =>
        this.localised(property, locale, resultingTheme),
      next: (theme: Name = resultingTheme) => this.next(theme),
      name: resultingTheme,
    };
  }

  public localised(
    property: string,
    locale: Language = "en",
    theme: Name = this.Theme
  ): string {
    const LSLocale: string | null = localStorage.getItem("language");

    if (LSLocale && locale === "en") {
      if (LSLocale === "en" || LSLocale === "pt") {
        locale = LSLocale;
      }
    }

    return Locales[theme][locale][property];
  }

  public switch(): void {
    this.theme = this.next().name;
  }

  public get d(): ITheme {
    return Themes[this.Theme];
  }
})();

export default Theme;

export const Themed = ({ children }: ProviderProps) => (
  <ThemeProvider theme={Theme.d}>{children}</ThemeProvider>
);
