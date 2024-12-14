import { QueryWrapper } from "components/lib";
import { useProducts } from "features/products";
import { ProductsListing } from "./ProductsListing";

export function ProductsList() {
  const productsQuery = useProducts();

  return (
    <QueryWrapper query={productsQuery}>
      {productsQuery.status === "success" ? (
        <ProductsListing products={productsQuery.data} />
      ) : null}
    </QueryWrapper>
  );
}
