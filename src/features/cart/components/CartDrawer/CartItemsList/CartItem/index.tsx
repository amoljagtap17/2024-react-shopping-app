import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import { memo } from "react";
import { QuantityButtons } from "./QuantityButtons";

interface ICartItemProps {
  item: any;
}

function CartItemUnmemoized({ item }: ICartItemProps) {
  const { id, price, quantity, name } = item;

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={() => {}}
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
