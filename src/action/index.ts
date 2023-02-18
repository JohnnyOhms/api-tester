import { DARK_MODE } from "./actionTYpe";

export const setDarkMode = (payload: string) => ({
  type: DARK_MODE,
  mode: payload,
});
