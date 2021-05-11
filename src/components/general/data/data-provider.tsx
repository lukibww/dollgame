import { ReactNode } from "react";
import DataContext from "./data-context";
import { Data } from "../../../story/spec";

export interface DataProviderProps {
  children?: ReactNode;
  data: Data;
}

function DataProvider({ data, children }: DataProviderProps) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default DataProvider;
