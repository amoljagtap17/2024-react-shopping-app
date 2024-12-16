import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, Typography } from "@mui/material";

interface IDecreaseQuantityButtonProps {
  disabled: boolean;
  onClick: () => void;
}

function DecreaseQuantityButton({
  disabled,
  onClick,
}: IDecreaseQuantityButtonProps) {
  return (
    <IconButton
      edge="end"
      aria-label="add"
      onClick={onClick}
      disabled={disabled}
      sx={{ display: "block", marginRight: 1 }}
    >
      <RemoveIcon />
    </IconButton>
  );
}

interface IIncreaseQuantityButtonProps {
  onClick: () => void;
}

function IncreaseQuantityButton({ onClick }: IIncreaseQuantityButtonProps) {
  return (
    <IconButton
      edge="end"
      aria-label="remove"
      onClick={onClick}
      sx={{ display: "block" }}
    >
      <AddIcon />
    </IconButton>
  );
}

interface IQuantityButtonsProps {
  id: number;
  quantity: number;
}

export function QuantityButtons({ id, quantity }: IQuantityButtonsProps) {
  const onDecreaseButtonClick = () => {};

  const onIncreaseButtonClick = () => {};

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width={140}>
      <DecreaseQuantityButton
        disabled={quantity <= 1}
        onClick={onDecreaseButtonClick}
      />
      <Typography
        variant="body1"
        width={24}
        height={30}
        component="div"
        padding={1}
        boxSizing="content-box"
        textAlign="center"
      >
        {quantity}
      </Typography>
      <IncreaseQuantityButton onClick={onIncreaseButtonClick} />
    </Box>
  );
}
