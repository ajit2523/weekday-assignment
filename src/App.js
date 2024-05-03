import logo from "./logo.svg";
import "./App.css";
import JobList from "./components/JobList";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <JobList />
      </div>
    </ThemeProvider>
  );
}

export default App;
