import { IProduct } from "features/products";

export interface ICartItem extends Pick<IProduct, "id"> {
  quantity: number;
}
