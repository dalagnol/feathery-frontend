export class LanguageEngine {
  private Language: string = "en";
  private Languages: Array<string> = ["en", "pt"];

  constructor() {
    this.getLangFromLS();
    let path = window.location.pathname.split("/")[1];

    if (this.Languages.includes(path)) {
      this.Language = path;
      localStorage.setItem("language", path);
    } else {
      this.getLangFromLS();
    }
  }

  private getLangFromLS() {
    this.Language = localStorage.getItem("language") || "en";
  }

  public get language(): string {
    return this.Language;
  }

  public set language(lang: string) {
    this.Language = lang;
    localStorage.setItem("language", lang);
  }

  public use(dictionary: any) {
    return dictionary[this.language];
  }
}

export default new LanguageEngine();
