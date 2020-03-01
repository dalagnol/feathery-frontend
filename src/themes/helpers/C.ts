import { U } from "./U";
export const C = (contextName: string) =>
  contextName === "DevTools" ? "DevTools" : `<${U(contextName)} />`;
