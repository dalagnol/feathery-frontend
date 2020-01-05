import { ITheme } from "interfaces/Theme";
import { timeIsBetween } from "./../shared/helpers";

import Light from "./Light";
import Dark from "./Dark";

const Themes: any = {
  Light: Light.Theme,
  Dark: Dark.Theme,
};

const Locales: any = {
  Light: Light.Dictionary,
  Dark: Dark.Dictionary,
};

export { Light, Dark };

export default new (class ThemeEngine {
  private Theme: string = "Light";

  constructor() {
    /** To implement later: theme stored in user's preferences */
    // const user: any = localStorage.getItem("user");
    const LSTheme: string | null = localStorage.getItem("theme");

    if (LSTheme) {
      this.Theme = LSTheme;
    } else {
      this.Theme = timeIsBetween("07:30", "18:00") ? "Light" : "Dark";
    }
  }

  public get theme() {
    return this.Theme;
  }

  public next(theme: string = this.Theme) {
    const everyThemeName = Object.keys(Themes);
    const currentThemeIndex = everyThemeName.indexOf(theme);
    const resultingThemeName =
      currentThemeIndex === everyThemeName.length - 1
        ? everyThemeName[0]
        : everyThemeName[currentThemeIndex + 1];

    return {
      localised: (property: string, locale: string = "en"): string =>
        this.localised(property, locale, resultingThemeName),
      next: (theme: string = resultingThemeName) => this.next(theme),
      name: resultingThemeName,
    };
  }

  public localised(
    property: string,
    locale: string = "en",
    theme: string = this.Theme
  ) {
    if (localStorage.getItem("language") && locale === "en") {
      locale = localStorage.getItem("language")!;
    }

    return Locales[theme][locale][property];
  }

  public switch() {
    this.Theme = this.next().name;
    return true;
  }

  public set theme(name: string) {
    if (Object.keys(Themes).includes(name)) {
      this.Theme = name;
    }
  }

  public get d(): ITheme {
    return Themes[this.Theme];
  }
})();
