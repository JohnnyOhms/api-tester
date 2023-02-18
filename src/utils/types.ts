export interface IcolorContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

interface IdarkMode {
  type: string;
  mode: string;
}

export type Action = IdarkMode;

export type Palette = {
  mode: string;
};
