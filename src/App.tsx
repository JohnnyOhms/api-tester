import Navbar from "./component/Navbar/Navbar";
import ColorContextProvider from "./context/colorModeContext";
import Main from "./main/Main";

function App() {
  return (
    // <ColorContextProvider>
    <div className="App" style={{ background: "" }}>
      <Navbar />
      <Main />
    </div>
    // </ColorContextProvider>
  );
}

export default App;
