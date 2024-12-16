import { Box, Typography } from "@mui/material";
import { useStore } from "app/store";
import { currencyFormatter } from "app/utils";

export function CartTotal() {
  const cartTotal = useStore.use.total();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <Typography variant="h6">Total:</Typography>
      <Typography variant="h6">
        {currencyFormatter.format(cartTotal)}
      </Typography>
    </Box>
  );
}
