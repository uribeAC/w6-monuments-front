import { Monument } from "../types";

export type MonumentDto = Omit<Monument, "alternativeText">;
