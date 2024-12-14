import { useProducts } from "features/products";

export function ProductsList() {
  const productsQuery = useProducts();

  console.log("productsQuery::", productsQuery);

  return <div>ProductsList</div>;
}
