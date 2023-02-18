import { DARK_MODE } from "./actionTYpe";

export const darkMode = (payload: string) => ({
  type: DARK_MODE,
  mode: payload,
});

export const setDarkMode = () => {
  return (dispatch: any) => {
    dispatch(darkMode("dark"));
  };
};
