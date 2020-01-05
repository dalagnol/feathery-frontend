export interface ITheme {
  primary: string;
  secondary: string;
  thirdiary: string;
  text: string;
  shadowy: string;
  blurry: string;
}

export interface IThemeEnum {
  Light: any;
  Dark: any;
}

export type ThemeProperty = "name";

export type ThemeName = "Light" | "Dark";

export const ThemeNames: Array<ThemeName> = ["Light", "Dark"];
