import { useContext } from "react";
import MonumentsContext from "../context/MonumentsContext";
import MonumentsContextStructure from "../context/types";

const useMonuments = (): MonumentsContextStructure => {
  const context = useContext(MonumentsContext);

  if (!context) {
    throw new Error("Missing context for Monuments provider");
  }

  return context;
};

export default useMonuments;
