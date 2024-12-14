import { Avatar } from "@mui/material";

export function FavoritesCount() {
  return (
    <Avatar
      variant="rounded"
      sx={{
        bgcolor: "inherit",
        border: "2px solid green",
      }}
    >
      12
    </Avatar>
  );
}
