import { ThemeProvider, createTheme, makeStyles } from "@mui/material";
import Header from "./components/Header";



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
    </ThemeProvider>
  );
}

export default App;
