import { Monument } from "../types";

export interface MonumentClientStructure {
  getMonuments: () => Promise<Monument[]>;
}
