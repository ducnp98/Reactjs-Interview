import React from "react";
import "./App.css";
import TabNavigation from "./app/pages/TabNavigation";
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", sans-serif'
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TabNavigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
