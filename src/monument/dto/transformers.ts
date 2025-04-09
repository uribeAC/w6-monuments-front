import { Monument } from "../types";
import { MonumentDto } from "./types";

export const mapMonumentsDtoToMonuments = (
  monumentsDto: MonumentDto[],
): Monument[] => {
  const monuments = monumentsDto.map<Monument>(({ name, ...monumentDto }) => ({
    ...monumentDto,
    name,
    alternativeText: `Monument ${name}`,
  }));

  return monuments;
};
