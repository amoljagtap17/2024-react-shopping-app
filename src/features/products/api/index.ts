import { axiosInstance } from "app/utils";
import { IProduct } from "features/products";

export async function getProducts(): Promise<IProduct[]> {
  const response = await axiosInstance.get<IProduct[]>("/products");

  return response.data;
}
