import { useContext } from "react";
import ErrorContext from "./error-context";

function useError() {
  const context = useContext(ErrorContext);
  return context;
}

export default useError;
