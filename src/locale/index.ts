import { observable, computed } from "mobx";
import { Language } from "./interfaces/language";

class LanguageEngine {
  @observable private Language: Language = "en";

  constructor() {
    const path: string = window.location.pathname.split("/")[1];

    if (path === "en" || path === "pt") {
      this.Language = path;
      localStorage.setItem("language", path);
    } else {
      this.loadLocaleFromLocalStorage();
    }
  }

  private loadLocaleFromLocalStorage(): void {
    const L: Language | string | null =
      localStorage.getItem("language") || "en";

    this.Language = L === "en" || L === "pt" ? L : "en";
  }

  @computed public get language(): Language {
    return this.Language;
  }

  public set language(lang: Language) {
    this.Language = lang;
    localStorage.setItem("language", lang);
  }

  public use(dictionary: any): any {
    return dictionary[this.language];
  }
}

export default new LanguageEngine();
