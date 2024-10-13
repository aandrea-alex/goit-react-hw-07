export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => {
  return state.filters.name || '';
};
