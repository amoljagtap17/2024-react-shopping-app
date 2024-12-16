import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useStore } from "app/store";
import { IProduct } from "features/products";

export function AddToCartButton({ id }: Pick<IProduct, "id">) {
  const addItemToCart = useStore.use.addItemToCart();
  const cart = useStore.use.cart();
  const isInCart = cart.some(item => item.id === id);

  return (
    <IconButton
      aria-label="add to cart"
      onClick={() => {
        addItemToCart(id);
      }}
      disabled={isInCart}
    >
      <AddShoppingCartIcon color={isInCart ? "disabled" : "action"} />
    </IconButton>
  );
}
