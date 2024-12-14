import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { currencyFormatter } from "app/utils";
import { IProduct } from "features/products";
import { AddToCartButton } from "./AddToCartButton";
import { FavoriteButton } from "./FavoriteButton";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  const { description, name, price, id } = product;

  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography fontWeight={600} variant="h5" component="p">
            {name}
          </Typography>
        }
        subheader={
          <Typography fontWeight={400} variant="h6" component="p">
            {currencyFormatter.format(price)}
          </Typography>
        }
      />
      <CardContent sx={{ minHeight: 200 }}>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <FavoriteButton id={id} />
        <AddToCartButton id={id} />
      </CardActions>
    </Card>
  );
}
