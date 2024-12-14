import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box>
      <Toolbar />
      <AppBar position="static" square elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexGrow={1}
            >
              <Typography variant="h6" component="div">
                Copyright &copy; {new Date().getFullYear()}
              </Typography>
              <Box
                width={100}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              ></Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
