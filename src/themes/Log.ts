import { observable, toJS } from "mobx";
import { Load } from "./helpers";

const LS = "theme_devtools_history";

type EventType = "INFO" | "ERROR" | "WARNING" | "SYSTEM";

class Event {
  public agent: string;
  public log: string;
  public type: EventType;
  public timestamp: Date;

  constructor(agent: string, log: string, type: EventType = "SYSTEM") {
    this.agent = agent;
    this.log = log;
    this.type = type;
    this.timestamp = new Date();
  }
}

export class Log {
  @observable private History: Array<Event> = Load(LS, []);

  public DevTools = false;

  private log(agent: string, log: string, type: EventType) {
    if (this.DevTools) {
      this.History.push(new Event(agent || "unknown", log, type));

      const cut = this.History.length - 50 > 0 ? this.History.length - 50 : 0;

      localStorage.setItem(LS, JSON.stringify(this.History.slice(cut)));
    }
  }

  info(agent: string, log: string) {
    this.log(agent, log, "INFO");
  }

  error(agent: string, log: string) {
    this.log(agent, log, "ERROR");
  }

  warn(agent: string, log: string) {
    this.log(agent, log, "WARNING");
  }

  system(agent: string, log: string) {
    this.log(agent, log, "SYSTEM");
  }

  public get history() {
    return toJS(this.History);
  }

  public clear() {
    this.History = [];
    localStorage.removeItem(LS);
  }
}

export default new Log();
