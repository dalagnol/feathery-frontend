import { createMomentInitialiser as Time } from "./../shared/helpers";
import Light from "./Light";
import Dark from "./Dark";
import moment from "moment";

export default class ThemeEngine {
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
}

export { Light, Dark };
