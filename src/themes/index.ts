import { createMomentInitialiser as Time } from "./../shared/helpers";

import Light from "./Light";
import Dark from "./Dark";

import moment from "moment";

const Themes = { Light, Dark };

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

  public set theme(name: string) {
    if (Object.keys(Themes).includes(name)) {
      this.Theme = name;
    }
  }
})();

export { Light, Dark };
