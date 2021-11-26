import { isEmpty } from "lodash";
export const parseFilters = (filters) => {
  let parsedFilters = "";
  if (!isEmpty(filters)) {
    parsedFilters = "?";
  }
  filters.forEach((filter) => {
    const key = Object.keys(filter)[0];
    const value = filter[key];
    if (value) {
      parsedFilters += `&${key}=${value}`;
    }
  });
  return parsedFilters;
};
