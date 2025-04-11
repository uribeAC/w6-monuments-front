import { createContext } from "react";
import MonumentsContextStructure from "./types";

const MonumentsContext = createContext<MonumentsContextStructure | null>(null);
MonumentsContext.displayName = "MonumentsContext";

export default MonumentsContext;
