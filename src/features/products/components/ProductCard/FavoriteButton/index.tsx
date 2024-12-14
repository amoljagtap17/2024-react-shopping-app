import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { IProduct } from "features/products";

export function FavoriteButton({ id }: Pick<IProduct, "id">) {
  return (
    <IconButton aria-label="add to favorites" onClick={() => {}}>
      <FavoriteIcon color={true ? "primary" : "secondary"} />
    </IconButton>
  );
}
