import { IconSize } from "../../types";

export const getIconSize = (size: IconSize) => {
  switch (size) {
    case "l": return 32;
    case "m": return 24;
    case "s": default: return 16;
  }
};
