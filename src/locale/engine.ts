import { observable, toJS } from "mobx";
import { Languages } from "./json";

class Engine {
  @observable private Language = localStorage.getItem("lang") || "en";
  @observable private Dictionaries: any = {};

  public get language() {
    return this.Language;
  }

  public set language(code: string) {
    if (Languages.includes(code)) {
      this.Language = code;
    }
  }

  public switchLanguage() {
    const current = Languages.indexOf(this.Language);
    this.language =
      Languages[current + 1 === Languages.length ? 0 : current + 1];
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
