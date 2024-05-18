import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: [],
    loading: false,
  },
  reducers: {
    isLogin(state, action) {
      state.userData.push(action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {addPost, setLoading} = AuthSlice.actions;
export default AuthSlice.reducer;
