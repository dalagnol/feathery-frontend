import { ITheme } from "interfaces/Theme";
import { createMomentInitialiser as Time } from "./../shared/helpers";

import Light from "./Light";
import Dark from "./Dark";

import moment from "moment";

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
    const user: any = localStorage.getItem("user");
    const LSTheme: string | null = localStorage.getItem("theme");

    if (LSTheme) {
      this.Theme = LSTheme;
    } else {
      this.Theme =
        moment().isAfter(Time("07:30")) && moment().isBefore(Time("18:00"))
          ? "Light"
          : "Dark";
    }
  }

  public get theme() {
    return this.Theme;
  }

  public localised(property: string, locale: string = "en") {
    if (localStorage.getItem("language") && locale === "en") {
      locale = localStorage.getItem("language")!;
    }

    return Locales[this.Theme][property];
  }

  public switch() {
    const everyTheme = Object.keys(Themes);
    console.log(this);
    const currentThemeIndex = everyTheme.indexOf(this.Theme);
    if (currentThemeIndex === everyTheme.length - 1) {
      this.Theme = everyTheme[0];
    } else {
      this.Theme = everyTheme[currentThemeIndex + 1];
    }
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
