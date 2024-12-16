import { useStore } from "app/store";
import { ICartItem } from "features/cart";
import { IProduct, useProducts } from "features/products";
import { CartItem } from "./CartItem";

export function CartItemsList() {
  const cart = useStore.use.cart();
  const { data } = useProducts();

  const cartItems = cart.map(cartItem => {
    const product = data!.find(
      product => product.id === cartItem.id
    ) as IProduct;

    return {
      ...cartItem,
      ...product,
    } as ICartItem & IProduct;
  });

  return cartItems.map(cartItem => (
    <CartItem item={cartItem} key={cartItem.id} />
  ));
}
