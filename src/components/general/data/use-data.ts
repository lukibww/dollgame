import { useContext } from "react";
import data from "../../../story/data";
import DataContext from "./data-context";

function useData() {
  const context = useContext(DataContext);
  return context || data;
}

export default useData;
