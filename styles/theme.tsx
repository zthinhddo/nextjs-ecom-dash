'use client';

import { ThemeOptions } from "@mui/material/styles/createTheme";
import red from '@mui/material/colors';

const { createTheme } = require("@mui/material");

// Custom theme: Colors
const customThemeColors = {
  color: {
    primary: {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
    }
  },
};

// Override ThemeOptions style Mui
const themeOptions: ThemeOptions = {
  ...customThemeColors, // my custom theme
  palette: {
    primary: {
      light: "#6cabd4",
      main: "#387ca3",
      dark: "#005074",
    },
    secondary: {
      light: "#89f6cf",
      main: "#55c39e",
      dark: "#159270",
      contrastText: "#fff",
    },
    error: {
      light: "#e5a0a0",
      main: "#CD5C5C",
      dark: "#992c2c",
    },
  },
  typography: {
    fontSize: 14.4,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
};

// ---- Typescript specifically ----

// Assign custom Type
/**
 * Create a new type called: CustomTheme
 * Get all keys in customThemeColors and create a new Type
 */
type CustomTheme = {
    [Key in keyof typeof customThemeColors]: typeof customThemeColors[Key];
}

// Module argumental: Extend the existed Theme & ThemeOptions from createTheme namespace with customTheme
declare module "@mui/material/styles/createTheme" {
    interface Theme extends CustomTheme {}
    // Allow configuration using `createTheme`
    interface ThemeOptions extends CustomTheme {}
}

// Create theme
export const theme = createTheme({ ...customThemeColors, ...themeOptions });