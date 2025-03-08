import { SortEnum } from "../enums/SortEnum";
import { ProductType } from "../types/ProductType";
import { SortType } from "../types/SortType";

export function sortProducts(products: ProductType[], sortBy: SortType) {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case SortEnum.alphabetical:
        return a.name.localeCompare(b.name);
      case SortEnum.count:
        return a.count - b.count;
      default:
        return 0;
    }
  });
}
