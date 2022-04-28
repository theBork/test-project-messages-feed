import { useContext } from "react";
import { ThemeContext } from "styled-components";
import theme from "constants/theme";

export type Theme = typeof theme;

const useTheme = (): Theme => useContext(ThemeContext);

export default useTheme;
