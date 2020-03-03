import { Log as Instance } from "../Log";

const Log = new Instance();

describe("The Theme devtools log class", () => {
  it("begins empty", () => {
    expect(Log.history).toHaveLength(0);
    expect(Log.DevTools).toBe(false);
  });

  it("does not log events if DevTools property is false", () => {
    const Agent = "Testing";
    const Event = "I am an event";
    const Type = "info";
    Log[Type](Agent, Event);

    expect(Log.history).toHaveLength(0);
  });

  it("logs events if DevTools property is true", () => {
    const Agent = "Testing";
    const Event = "I am an event";
    const Type = "info";
    Log.DevTools = true;

    Log[Type](Agent, Event);

    expect(Log.history[0].agent).toBe(Agent);
    expect(Log.history[0].log).toBe(Event);
    expect(Log.history[0].type).toBe(Type.toUpperCase());
  });

  it("clears its history", () => {
    Log.clear();

    expect(Log.history).toHaveLength(0);
  });
});
