import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "app/mui/theme";

interface IAppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: IAppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
