import { ThemeProvider, createTheme, makeStyles } from "@mui/material";
import Header from "./components/Header";
import Menu from "./components/Menu";



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
    <ThemeProvider theme={theme}>
    <Header/>
    <Menu/>
    </ThemeProvider>
  );
}

export default App;
