import { StateCreator } from "zustand";
import { ICartItem } from "../types";

type CartState = {
  cart: ICartItem[];
  total: number;
};

type CartActions = {
  addItemToCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export type ICartSlice = CartState & CartActions;

const initialState: CartState = {
  cart: [],
  total: 0,
};

export const createCartSlice: StateCreator<
  ICartSlice,
  [["zustand/immer", never], ["zustand/devtools", never]],
  [],
  ICartSlice
> = set => ({
  ...initialState,
  addItemToCart: id => {
    set(
      state => {
        state.cart.push({ id, quantity: 1 });
      },
      undefined,
      "cart/addItemToCart"
    );
  },
  removeItemFromCart: id =>
    set(
      state => {
        // state.cart = state.cart.filter(item => item.id !== id);

        const index = state.cart.findIndex(item => item.id === id);

        if (index !== -1) state.cart.splice(index, 1);
      },
      undefined,
      "cart/removeItemFromCart"
    ),
  increaseQuantity: id =>
    set(
      state => {
        const item = state.cart.find(item => item.id === id);

        if (item) {
          item.quantity += 1;
        }
      },
      undefined,
      "cart/increaseQuantity"
    ),
  decreaseQuantity: id =>
    set(
      state => {
        const item = state.cart.find(item => item.id === id);

        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const index = state.cart.findIndex(item => item.id === id);

          if (index !== -1) state.cart.splice(index, 1);
        }
      },
      undefined,
      "cart/decreaseQuantity"
    ),
});
