import { CartItem } from "./CartItem";

export function CartItemsList() {
  return [].map(cartItem => <CartItem item={cartItem} key={cartItem.id} />);
}
