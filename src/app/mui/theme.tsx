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
    MuiCard: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          border: "4px solid #000",
          borderRadius: "10px",
          position: "relative",
          zIndex: 0,
          "::after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: "-6px",
            bottom: "-6px",
            zIndex: -1000,
            borderRadius: "0 10px 10px",
            borderRight: "9px solid #000",
            borderBottom: "9px solid #000",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
