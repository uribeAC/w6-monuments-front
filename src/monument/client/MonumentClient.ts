import { Monument } from "../types";
import { MonumentClientStructure } from "./types";

class MonumentClient implements MonumentClientStructure {
  public async getMonuments(): Promise<Monument[]> {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${apiUrl}/monuments`);

    const { monuments } = (await response.json()) as { monuments: Monument[] };

    return monuments;
  }
}

export default MonumentClient;
