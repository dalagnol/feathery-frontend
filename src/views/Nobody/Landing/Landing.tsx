import React from "react";
import { useTheme, DevTools } from "themes";
import { useLocale } from "locale";

import { Playground } from "./styles";
import { Square } from "./styles/Shapes";

import { theme, locale } from "./json";

export function Landing() {
  const Theme = useTheme("Landing", theme);
  useTheme("a", theme);
  useTheme("b", theme);
  useTheme("c", theme);
  useTheme("d", theme);
  useTheme("e", theme);
  useTheme("f", theme);
  useTheme("h", theme);
  useTheme("i", theme);
  useTheme("j", theme);
  useTheme("k", theme);
  useTheme("l", theme);
  useTheme("m", theme);
  const [l] = useLocale("Landing", locale);

  return (
    <Playground>
      <Square onClick={Theme.Switch}>
        {l(
          "Notice how this is written naturally, and it still responds to language"
        )}
      </Square>
      <DevTools />
    </Playground>
  );
}
