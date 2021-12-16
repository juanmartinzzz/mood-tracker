
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header/Header";
import Timeline from "./components/Timeline/Timeline";


const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Header />

      <Timeline />
    </CssBaseline>
  </ThemeProvider>
);

export default App;
