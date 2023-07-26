import { Paper, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme";
import { Layout } from "@/shared";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <Layout />
      </Paper>
    </ThemeProvider>
  );
}