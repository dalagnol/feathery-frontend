export type palette = "light" | "dark";

export interface ITheme {
  [x: palette]: any;
  light: any;
  dark: any;
}
