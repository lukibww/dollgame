import { ReactNode, useState } from "react";
import ErrorContext from "./error-context";

export interface ErrorBoundaryProps {
  children?: ReactNode;
}

export type Error = string | null;

function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const state = useState<Error>(null);

  return (
    <ErrorContext.Provider value={state}>{children}</ErrorContext.Provider>
  );
}

export default ErrorBoundary;
