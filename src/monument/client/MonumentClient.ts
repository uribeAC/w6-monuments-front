import {
  mapMonumentDtoToMonument,
  mapMonumentsDtoToMonuments,
} from "../dto/transformers";
import { MonumentDto } from "../dto/types";
import { Monument, MonumentData } from "../types";
import { MonumentClientStructure } from "./types";

class MonumentClient implements MonumentClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public async getMonuments(): Promise<Monument[]> {
    const response = await fetch(`${this.apiUrl}/monuments`);

    const { monuments } = (await response.json()) as {
      monuments: MonumentDto[];
    };

    return mapMonumentsDtoToMonuments(monuments);
  }

  public async addMonument(monumentData: MonumentData): Promise<Monument> {
    const response = await fetch(`${this.apiUrl}/monuments/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(monumentData),
    });

    const newMonument = (await response.json()) as MonumentDto;

    return mapMonumentDtoToMonument(newMonument);
  }

  public async deleteMonument(monumentId: string): Promise<Monument> {
    const response = await fetch(`${this.apiUrl}/monuments/${monumentId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const deletedMonument = (await response.json()) as MonumentDto;

    return mapMonumentDtoToMonument(deletedMonument);
  }
}

export default MonumentClient;
