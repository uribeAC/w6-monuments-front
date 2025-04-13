import { Monument, MonumentData } from "../types";

interface MonumentsContextStructure {
  monuments: Monument[];
  loadMonuments: () => Promise<void>;
  createMonument: (monumentData: MonumentData) => Promise<Monument>;
  deleteMonumentById: (monumentId: string) => Promise<void>;
}

export default MonumentsContextStructure;
