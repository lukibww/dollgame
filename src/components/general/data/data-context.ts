import { createContext } from "react";
import { Data } from "../../../story/spec";

const DataContext = createContext<Data | null>(null);

export default DataContext;
