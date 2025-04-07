import { Monument } from "../types";

const getMonuments = async (monumentsUrl: string): Promise<Monument[]> => {
  const response = await fetch(monumentsUrl);

  const { monuments } = (await response.json()) as { monuments: Monument[] };

  return monuments;
};

export default getMonuments;
