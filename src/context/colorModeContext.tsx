import { PaletteMode, createTheme } from "@mui/material";
import React, { createContext } from "react";
import { IcolorContext } from "../utils/types";

export const ColorModeContext = createContext({});

export default function ColorContextProvider({ Children }: any) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    [mode]
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme({}), []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      {Children}
    </ColorModeContext.Provider>
  );
}

// const colorMode = () => React.useContext(ColorModeContext);
