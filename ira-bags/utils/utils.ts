export enum COLLECTIONS {
  TUBE = "TUBE",
  CLASSIC = "CLASSIC",
  TRANSPARENT = "TRANSPARENT",
}

export type BagItemType = {
  id: number;
  name: string;
  imageUrl: string;
  collection: COLLECTIONS;
  description: string;
};
