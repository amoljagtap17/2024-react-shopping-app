import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#003049",
    },
    secondary: {
      main: "#669bbc",
    },
    error: {
      main: "#c1121f",
    },
    background: {
      default: "#fdf0d5",
      paper: "#fdf0d5",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: false,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: false,
        disableFocusRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableTouchRipple: true,
        focusRipple: false,
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
