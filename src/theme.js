import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0098ff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fafafa',
    },
  },
});

export default theme;