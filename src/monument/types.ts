export type Monument = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  alternativeText: string;
  country: string;
  city: string;
};

export type MonumentData = Omit<Monument, "id" | "alternativeText">;
