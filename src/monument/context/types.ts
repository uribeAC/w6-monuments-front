import { Monument, MonumentData } from "../types";

interface MonumentsContextStructure {
  monuments: Monument[];
  loadMonuments: () => Promise<void>;
  createMonument: (monumentData: MonumentData) => Promise<void>;
}

export default MonumentsContextStructure;
