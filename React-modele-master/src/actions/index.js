export const ACTIVE_BUTTON_FILTER = 'ACTIVE_BUTTON_FILTER';
export const ACTIVE_BUTTON_ADD = 'ACTIVE_BUTTON_FILTER';
export const REMOVE_FILTER = "REMOVE_FILTER";

export const activeButtonFilter = () => ({
  type: ACTIVE_BUTTON_FILTER,
});

export const activeButtonAdd = () => ({
  type: ACTIVE_BUTTON_ADD,
});

export const removeFilter = () => ({
  type: REMOVE_FILTER,
})


