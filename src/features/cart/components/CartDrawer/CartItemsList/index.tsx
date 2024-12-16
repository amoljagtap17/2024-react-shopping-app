import { useStore } from "app/store";
import { useProducts } from "features/products";
import { CartItem } from "./CartItem";

export function CartItemsList() {
  const cart = useStore.use.cart();
  const { data } = useProducts();

  const cartItems = cart.map(cartItem => {
    const product = data?.find(product => product.id === cartItem.id);

    return {
      ...cartItem,
      ...product,
    };
  });

  return cartItems.map(cartItem => (
    <CartItem item={cartItem} key={cartItem.id} />
  ));
}
