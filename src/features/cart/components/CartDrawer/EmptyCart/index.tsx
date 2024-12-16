import { Typography } from "@mui/material";
import { useStore } from "app/store";

export function EmptyCart() {
  const cart = useStore.use.cart();

  return cart.length === 0 ? (
    <Typography variant="body1" sx={{ p: 2 }}>
      Your cart is empty!
    </Typography>
  ) : null;
}
