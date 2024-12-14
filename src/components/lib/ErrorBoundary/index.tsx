import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorRetry } from "components/lib";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: IErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ReactErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary, error }) => (
        <ErrorRetry
          errorMessage={error?.message}
          onClickHandler={() => resetErrorBoundary()}
        />
      )}
    >
      {children}
    </ReactErrorBoundary>
  );
}
