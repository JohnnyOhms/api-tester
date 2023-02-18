import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Main from "./main/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { setDarkMode } from "./action";
import { Stack } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App({ mode, setDarkMode }: any) {
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setDarkMode();
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Stack
          sx={{
            background: mode === "dark" ? "#1A2027" : "white",
            height: { xs: "200vh", sm: "100%", md: "100%" },
          }}
        >
          <Navbar />
          <Main />
        </Stack>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const mapStateToProps = (state: any) => {
  return {
    mode: state.mainState.mode,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setDarkMode: () => dispatch(setDarkMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
