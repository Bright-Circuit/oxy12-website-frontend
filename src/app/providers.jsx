"use client";

import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#08111b",
      paper: "#101a28",
    },
    primary: {
      main: "#f59e0b",
    },
  },
  typography: {
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

export function AppProviders({ children }) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles
          styles={{
            "html, body": {
              backgroundColor: "var(--color-background)",
              color: "var(--color-foreground)",
            },
          }}
        />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
