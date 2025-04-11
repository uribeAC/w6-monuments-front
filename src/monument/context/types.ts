import { Monument } from "../types";

interface MonumentsContextStructure {
  monuments: Monument[];
  loadMonuments: () => Promise<void>;
}

export default MonumentsContextStructure;
