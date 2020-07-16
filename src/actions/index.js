export const addFeature = (item) => {
  return {
    type: 'ADDED_FEATURE',
    payload: item
  };
}

export const removeFeature = (item) => {
  return {
    type: 'REMOVE_FEATURE',
    payload: item
  };
}