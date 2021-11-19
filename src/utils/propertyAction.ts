export function addToSavedProperties(lists: any, item: any, index: number) {
  let results = lists.results;
  let saved = lists.saved;
  let saved_array = [...saved, item];
  let move_array = results.filter((item: any, i: number) => i !== index);
  const new_item = {
    ...lists,
    results: move_array,
    saved: saved_array,
  };

  return new_item;
}

export function removeFromSavedProperties(
  lists: any,
  item: any,
  index: number
) {
  let results = lists.results;
  let saved = lists.saved;
  let results_array = [...results, item];
  let move_array = saved.filter((item: any, i: number) => i !== index);

  const new_item = {
    ...lists,
    results: results_array,
    saved: move_array,
  };

  return new_item;
}
