import { Typography } from "@mui/material";

export function EmptyCart() {
  return true ? (
    <Typography variant="body1" sx={{ p: 2 }}>
      Your cart is empty!
    </Typography>
  ) : null;
}
