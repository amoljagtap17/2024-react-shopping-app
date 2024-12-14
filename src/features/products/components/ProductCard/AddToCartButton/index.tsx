import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { IProduct } from "features/products";

export function AddToCartButton({ id }: Pick<IProduct, "id">) {
  return (
    <IconButton aria-label="add to cart" onClick={() => {}}>
      <AddShoppingCartIcon color="info" />
    </IconButton>
  );
}
