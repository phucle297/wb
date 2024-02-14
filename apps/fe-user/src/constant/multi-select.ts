import { categoriesSchema } from "@wb/common/src/types/categories";
import { typesSchema } from "@wb/common/src/types/types";

export interface IOptionTypes {
  label: string;
  value: string;
}
export const optionsTypes: IOptionTypes[] = [
  { label: "Manga", value: typesSchema.enum.manga },
  { label: "Anime Tv Series", value: typesSchema.enum.anime_tv_series },
  { label: "Anime Movie", value: typesSchema.enum.anime_movie },
  { label: "Light Novel/Web Novel", value: typesSchema.enum["light_novel/web_novel"] },
];
export const optionsCategories: IOptionTypes[] = Object.keys(categoriesSchema.enum).map((item) => ({
  value: item,
  label: item[0].toUpperCase() + item.slice(1).replaceAll("_", " "),
}));
