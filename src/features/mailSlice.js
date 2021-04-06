import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },

    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  selectedMail,
} = mailSlice.actions;

export const selectedOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
