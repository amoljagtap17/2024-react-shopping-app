import { UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorRetry, Spinner } from "components/lib";

interface IQueryWrapperProps<T> {
  query: UseQueryResult<T, AxiosError<unknown, any>>;
  children: React.ReactNode;
}

export function QueryWrapper<T>({ query, children }: IQueryWrapperProps<T>) {
  const { status, error, refetch } = query;

  if (status === "pending") return <Spinner />;

  if (status === "error")
    return (
      <ErrorRetry
        errorMessage={error.message}
        onClickHandler={() => refetch()}
      />
    );

  if (status === "success") return <>{children}</>;
}
