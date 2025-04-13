import {
  mapMonumentDtoToMonument,
  mapMonumentsDtoToMonuments,
} from "../dto/transformers";
import { MonumentDto } from "../dto/types";
import { Monument, MonumentData } from "../types";
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

  public async addMonument(monumentData: MonumentData): Promise<Monument> {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${apiUrl}/monuments/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(monumentData),
    });

    const newMonument = (await response.json()) as MonumentDto;

    return mapMonumentDtoToMonument(newMonument);
  }
}

export default MonumentClient;
