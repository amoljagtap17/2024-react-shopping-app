import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import { useStore } from "app/store";
import { ICartItem } from "features/cart";
import { IProduct } from "features/products";
import { memo } from "react";
import { QuantityButtons } from "./QuantityButtons";

interface ICartItemProps {
  item: ICartItem & IProduct;
}

function CartItemUnmemoized({ item }: ICartItemProps) {
  const { id, quantity, name, price } = item;
  const removeItemFromCart = useStore.use.removeItemFromCart();

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={() => {
            removeItemFromCart(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
      divider
    >
      <ListItemText
        primary={name}
        secondary={
          <Typography component="span">${Number(price).toFixed(2)}</Typography>
        }
      />
      <QuantityButtons id={id} quantity={quantity} />
    </ListItem>
  );
}

export const CartItem = memo(CartItemUnmemoized);
