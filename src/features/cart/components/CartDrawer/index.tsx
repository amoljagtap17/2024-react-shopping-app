import { Box, Divider, List, Typography } from "@mui/material";
import { CartItemsList } from "./CartItemsList";
import { CartTotal } from "./CartTotal";
import { EmptyCart } from "./EmptyCart";

export function CartDrawer() {
  return (
    <Box width="40vw">
      <Typography variant="h6" component="div" sx={{ p: 2 }}>
        Cart Items
      </Typography>
      <Divider />
      <List>
        <EmptyCart />
        <CartItemsList />
      </List>
      <CartTotal />
    </Box>
  );
}
