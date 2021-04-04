import { createContext, Dispatch, SetStateAction } from "react";
import { Error } from "./error-boundary";

export type ErrorContextValue = [Error, Dispatch<SetStateAction<Error>>];

const ErrorContext = createContext<ErrorContextValue>([null, () => {}]);

export default ErrorContext;
