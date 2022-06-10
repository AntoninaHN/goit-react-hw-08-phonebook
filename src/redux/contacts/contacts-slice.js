
import  {fetchContacts, addContact,removeContact } from './contacts-operations'

const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      contacts: [...payload],
    }),
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },
    [removeContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export default contactsSlice.reducer;
export const { setFilter } = contactsSlice.actions;