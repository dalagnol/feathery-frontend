import { Language } from "./../interfaces/Locale";

export default new (class LanguageEngine {
  private Language: Language = "en";

  constructor() {
    this.getLangFromLS();
    let path: string = window.location.pathname.split("/")[1];

    if (path === "en" || path === "pt") {
      this.Language = path;
      localStorage.setItem("language", path);
    } else {
      this.Language = this.getLangFromLS();
    }
  }

  private getLangFromLS(): Language {
    const L: Language | string | null =
      localStorage.getItem("language") || "en";

    return L === "en" || L === "pt" ? L : "en";
  }

  public get language(): Language {
    return this.Language;
  }

  public set language(lang: Language) {
    this.Language = lang;
    localStorage.setItem("language", lang);
  }

  public use(dictionary: any): any {
    return dictionary[this.language];
  }
})();
