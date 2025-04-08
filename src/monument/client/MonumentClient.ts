import { Monument } from "../types";
import { MonumentClientStructure } from "./types";

class MonumentClient implements MonumentClientStructure {
  public async getMonuments(): Promise<Monument[]> {
    const response = await fetch(
      "https://monuments-back-uribe.onrender.com/monuments",
    );

    const { monuments } = (await response.json()) as { monuments: Monument[] };

    return monuments;
  }
}

export default MonumentClient;
