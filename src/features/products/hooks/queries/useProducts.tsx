import { queryOptions, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "app/utils";
import { getProducts } from "features/products";

export function productsQueryOptions() {
  return queryOptions({
    queryKey: [QUERY_KEYS.products],
    queryFn: getProducts,
  });
}

export function useProducts() {
  return useQuery(productsQueryOptions());
}
