import { createCartSlice, ICartSlice } from "features/cart";
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "./createSelectors";

const useStoreBase = create<ICartSlice>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createCartSlice(...a),
        }))
      ),
      { name: "shopping-app-store" }
    )
  )
);

export const useStore = createSelectors(useStoreBase);
