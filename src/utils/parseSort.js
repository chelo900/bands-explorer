import { isEmpty } from "lodash";

export const parseSort = (sort) => {
  let parsedSort = "";
  if (!isEmpty(sort)) {
    parsedSort = "?";
    const { name, value } = sort;
    if (value) {
      parsedSort += `_sort=${name}&_order=${value}`;
    }
  }
  return parsedSort;
};
