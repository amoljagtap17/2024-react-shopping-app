import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function AppLayout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ flexGrow: 1, position: "relative", height: "100%" }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
