import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, Drawer, IconButton } from "@mui/material";
import { CartDrawer } from "features/cart";
import { useState } from "react";

interface IShoppingCartButtonProps {
  onClick: () => void;
}

function ShoppingCartIconButton({ onClick }: IShoppingCartButtonProps) {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="shopping cart"
      onClick={onClick}
    >
      <ShoppingCartCheckoutIcon />
    </IconButton>
  );
}

export function ShoppingCartButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <Box>
      <ShoppingCartIconButton onClick={handleOpen} />

      {isOpen ? (
        <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
          <CartDrawer />
        </Drawer>
      ) : null}
    </Box>
  );
}
