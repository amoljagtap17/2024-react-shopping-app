import { Grid2 as Grid } from "@mui/material";
import { IProduct, ProductCard } from "features/products";

interface IProductsListingProps {
  products: IProduct[];
}

export function ProductsListing({ products }: IProductsListingProps) {
  return (
    <Grid container rowSpacing={4} columnSpacing={4}>
      {products.map(product => (
        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={product.id} padding={2}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
