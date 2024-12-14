import { createAxiosInstance } from "app/utils";

export const QUERY_KEYS = {
  products: "products",
} as const;

const apiURL = import.meta.env.VITE_API_URL;
export const axiosInstance = createAxiosInstance(apiURL);
