import { observable, toJS } from "mobx";
import { language } from "./json";

class Engine {
  @observable private Language = localStorage.getItem("lang") || "en";
  @observable private Dictionaries: any = {};

  public get language() {
    return this.Language;
  }

  public set language(code: string) {
    if (language.includes(code)) {
      this.Language = code;
      localStorage.setItem("lang", code);
    }
  }

  public switchLanguage() {
    const current = language.indexOf(this.Language);
    this.language = language[current + 1 === language.length ? 0 : current + 1];
  }

  public add(component: string, config: any) {
    this.Dictionaries = {
      ...this.Dictionaries,
      [component]: config[this.language],
    };

    return this.Dictionaries[component]?.[this.language];
  }

  public remove(component: string) {
    delete this.Dictionaries[component];
  }

  public get dictionaries() {
    return toJS(this.Dictionaries);
  }
}

export default new Engine();
