import {createSlice} from '@reduxjs/toolkit';

export const CompleteInformation = createSlice({
  name: 'completeInformation',
  initialState: {
    userData: [],
  },
  reducers: {
    isLogin(state, action) {
      state.userData.push(action.payload);
    },

    allSocialLinks: (state, action) => {
      state.userData = [...state.userData, {socialLinks: action.payload}];
    },

    allPromptsInfo: (state, action) => {
      state.userData = [...state.userData, {promptInformation: action.payload}];
    },
  },
});

export const {allSocialLinks, allPromptsInfo} = CompleteInformation.actions;

export default CompleteInformation.reducer;
