import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: [],
  },
  reducers: {
    isLogin(state, action) {
      state.userData.push(action.payload);
    },
  },
});

export const {addPost} = AuthSlice.actions;
export default AuthSlice.reducer;
