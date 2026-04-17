export type TSubCategory = {
  id: number;
  title: string;
};

export type TCategory = {
  id: number;
  title: string;
  subCategory: TSubCategory[];
};