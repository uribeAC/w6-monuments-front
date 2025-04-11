import { useContext } from "react";
import MonumentsContext from "../context/MonumentsContext";
import MonumentsContextStructure from "../context/types";

const useMonuments = (): MonumentsContextStructure => {
  const context = useContext(MonumentsContext);

  if (!context) {
    throw new Error("Missing provider for MonumentsContext");
  }

  return context;
};

export default useMonuments;
