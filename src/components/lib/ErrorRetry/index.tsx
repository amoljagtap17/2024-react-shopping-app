import { Box, Button, Stack, Typography } from "@mui/material";

interface IErrorRetryProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  errorMessage: string | undefined;
}

export function ErrorRetry({ onClickHandler, errorMessage }: IErrorRetryProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      minWidth="100%"
    >
      <Stack spacing={1}>
        <Typography variant="body1">
          {errorMessage ?? "Oops.. Something went wrong!"}
        </Typography>
        <Button variant="text" onClick={onClickHandler}>
          Retry
        </Button>
      </Stack>
    </Box>
  );
}
