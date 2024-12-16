import { Box, Typography } from "@mui/material";

export function CartTotal() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <Typography variant="h6">Total:</Typography>
      <Typography variant="h6">$123</Typography>
    </Box>
  );
}
