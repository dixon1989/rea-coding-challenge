import { Property, PropertyData } from "../types";

export function addToSavedProperties(
  lists: Property,
  item: PropertyData,
  index: number
) {
  let results = lists.results;
  let saved = lists.saved;
  let saved_array = [...saved, item];
  let move_array = results.filter(
    (item: PropertyData, i: number) => i !== index
  );
  const new_item = {
    ...lists,
    results: move_array,
    saved: saved_array,
  };

  return new_item;
}

export function removeFromSavedProperties(
  lists: Property,
  item: PropertyData,
  index: number
) {
  let results = lists.results;
  let saved = lists.saved;
  let results_array = [...results, item];
  let move_array = saved.filter((item: PropertyData, i: number) => i !== index);

  const new_item = {
    ...lists,
    results: results_array,
    saved: move_array,
  };

  return new_item;
}
