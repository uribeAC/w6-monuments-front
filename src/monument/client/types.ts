import { Monument, MonumentData } from "../types";

export interface MonumentClientStructure {
  getMonuments: () => Promise<Monument[]>;
  addMonument: (monumentData: MonumentData) => Promise<Monument>;
  deleteMonument: (monumentId: string) => Promise<Monument>;
}
