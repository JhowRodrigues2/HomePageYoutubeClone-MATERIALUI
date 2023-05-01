import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Menu from "./components/Menu";
import GlobalProvider from "./context";



function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3f51b5",
      },
    },
  });

  return (
    <GlobalProvider>
    <ThemeProvider theme={theme}>
    <Header/>
    <Menu/>
    </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
