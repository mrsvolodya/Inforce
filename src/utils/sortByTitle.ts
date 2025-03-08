import { DEFAULT_OPTIONS } from "../constants/DEFAULT_OPTIONS";
import { SortType } from "../types/SortType";

export const sortByTitle = (sortBy: SortType) => {
  return (
    DEFAULT_OPTIONS.find((option) => option.value === sortBy)?.label ||
    "Select sort"
  );
};
