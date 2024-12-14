import { QueryWrapper } from "components/lib";
import { useProducts } from "features/products";

export function ProductsList() {
  const productsQuery = useProducts();

  return (
    <QueryWrapper query={productsQuery}>
      <div>ProductsList</div>
    </QueryWrapper>
  );
}
