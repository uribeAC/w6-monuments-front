import { mapMonumentsDtoToMonuments } from "../dto/transformers";
import { MonumentDto } from "../dto/types";
import { Monument } from "../types";
import { MonumentClientStructure } from "./types";

class MonumentClient implements MonumentClientStructure {
  public async getMonuments(): Promise<Monument[]> {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${apiUrl}/monuments`);

    const { monuments } = (await response.json()) as {
      monuments: MonumentDto[];
    };

    return mapMonumentsDtoToMonuments(monuments);
  }
}

export default MonumentClient;
