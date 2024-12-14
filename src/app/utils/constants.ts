import { createAxiosInstance } from "app/utils";

export const QUERY_KEYS = {
  products: "products",
} as const;

const apiURL = import.meta.env.VITE_API_URL;
export const axiosInstance = createAxiosInstance(apiURL);

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
